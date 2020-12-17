import React from 'react';
import InputForm from './components/InputForm';
import DisplayMovies from './components/DisplayMovies';
import './App.css';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="container">
      <h1 className="display-4">Rate your favorite movies</h1>
        <InputForm />
        <DisplayMovies />
      </div>
      </GlobalProvider>
  );
}

export default App;
