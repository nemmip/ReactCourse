import React from 'react';
import {Movie} from "../../../interfaces/Movie.ts";
import MovieItem from "./MovieItem.tsx";

const MovieList:React.FC<{
    movies: Movie[];
}> = ({movies}) => {
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    );
};

export default MovieList;