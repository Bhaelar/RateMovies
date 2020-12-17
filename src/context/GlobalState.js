import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  movies: []
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