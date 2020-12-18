import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  movies: [
    {
      movie: "The Nun",
      rating: "4.4",
      duration: "2:15"
    },
    {
      movie: "Forest Gump",
      rating: "3.5",
      duration: "2:20"
    },
    {
      movie: "Gladiator",
      rating: "4.7",
      duration: "2:40"
    },
    {
      movie: "Armageddon",
      rating: "3.8",
      duration: "1:50"
    },
    {
      movie: "Pawn Sacrifice",
      rating: "4.2",
      duration: "2:10"
    },
    {
      movie: "Southpaw",
      rating: "4.1",
      duration: "2:22"
    }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
    function addMovie(movie) {
     
    dispatch({
      type: 'ADD_MOVIE',
      payload: movie
    });
  }

  return (<GlobalContext.Provider value={{
    movies: state.movies,
    addMovie
  }}>
    {children}
  </GlobalContext.Provider>);
}