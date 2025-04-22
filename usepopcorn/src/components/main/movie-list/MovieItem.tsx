import React from 'react';
import {Movie} from "../../../interfaces/Movie.ts";

const MovieItem: React.FC<
    {
        movie: Movie;
    }> = ({movie}) => {
    return (
        <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
};

export default MovieItem;