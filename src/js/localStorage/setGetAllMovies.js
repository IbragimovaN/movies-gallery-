import {movies} from '../../data/movies.js';
import { ALL_MOVIES } from '../constantas/localStorage.js';

export function setAllMovies(moviesArray = movies){
    localStorage.setItem(ALL_MOVIES, JSON.stringify(moviesArray || []));
}

export function getAllMovies(){
    return JSON.parse(localStorage.getItem(ALL_MOVIES) || [])
}

export function getFavoriteMovies(){
    const allMovies = getAllMovies();
    if (allMovies.length){
        return allMovies.filter (movie => movie.isFavourite)
    }
}
