import React,  { createContext, useReducer, useContext } from 'react';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/moviesActions';

const MoviesContext = createContext();

// Initial state
const initialState = {
    favorites: []
};

const moviesReducer = (state, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.movie]
            };
        case REMOVE_FAVORITE:
            let copy = { ...state };
            copy = {
                ...copy,
                favorites: copy.favorites.filter((movie) => movie.id !== action.movie.id)
            }
            return copy;
        default:
            return state;
    }
};

const MoviesProvider = (props) => {
    const [stateMovies, dispatchMovies] = useReducer(moviesReducer, initialState);
    const moviesData = { stateMovies, dispatchMovies };

    return <MoviesContext.Provider value={moviesData} {...props} />;
};

const useMoviesContext = () =>{
    return useContext(MoviesContext);
};

export {
    MoviesProvider,
    useMoviesContext
};