export default (state, action) => {
	switch (action.type) {
		case 'ADD_MOVIE': {
			if (state.movies.some((e) => e.movie === action.payload.movie)) {
				return {
					...state,
					movies: state.movies.map(
						(m) =>
							m.movie === action.payload.movie
								? {
										...m,
										movie: action.payload.movie,
										rating: action.payload.rating,
										duration: action.payload.duration
									}
								: m
					)
				};
			} else {
				return {
					...state,
					movies: [ action.payload, ...state.movies ]
				};
			}
		}

		default:
			return state;
	}
};
