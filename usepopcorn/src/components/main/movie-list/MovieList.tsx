import React from 'react';
import {Movie} from "../../../interfaces/Movie.ts";
import MovieItem from "./MovieItem.tsx";

const MovieList:React.FC<{
    movies: Movie[];
    onMovieSelected: (id: string) => void;
}> = ({movies, onMovieSelected}) => {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie} onClick={onMovieSelected}/>
            ))}
        </ul>
    );
};

export default MovieList;