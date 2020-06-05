import React, { Component } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Nav from './component/Nav';
import AddMovie from './component/AddMovie';
import { MovieProvider } from './component/MovieContext';

function App() {
  return (

    <MovieProvider>
      <div className="App">
        <h1>Привет!</h1>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>

  );

}

export default App;