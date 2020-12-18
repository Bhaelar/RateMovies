import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const DisplayMovies = () => {
	const { movies } = useContext(GlobalContext);
	const [ search, setSearch ] = useState('');

	const searchMovie = (search) => {
		let result = [];
		for (let i = 0; i < movies.length; i++) {
			console.log(search, movies[i].movie.substring(0, search.length));
			if (movies[i].movie.substring(0, search.length) === search) {
				result.push(movies[i]);
			}
		}
		return result;
	};
	return (
		<div className="mt-3">
			<form>
				<div className="form-group">
					<label for="search">Search</label>
					<input
						type="text"
						className="form-control"
						id="search"
						name="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			</form>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Movie</th>
						<th scope="col">Rating</th>
						<th scope="col">Duration</th>
					</tr>
				</thead>
				<tbody>
					{search === '' ? (
						movies.map((m) => (
							<tr key={Math.floor(Math.random() * 100)}>
								<td>{m.movie}</td>
								<td>{m.rating}</td>
								<td>{m.duration}</td>
							</tr>
						))
					) : (
						searchMovie(search).map((m) => (
							<tr key={Math.floor(Math.random() * 100)}>
								<td>{m.movie}</td>
								<td>{m.rating}</td>
								<td>{m.duration}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default DisplayMovies;
