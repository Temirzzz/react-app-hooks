import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav>
            <h3>Фильмы</h3>
            <p>Список фильмов: {movies.length}</p>
        </nav>
    );
}

export default Nav;