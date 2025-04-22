import React from 'react';
import {WatchedMovie} from "../../../interfaces/Movie.ts";
import WatchedMovieItem from "./WatchedMovieItem.tsx";

const WatchedMoviesList: React.FC<{
    watched: WatchedMovie[];
}> = ({watched}) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovieItem key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    );
};

export default WatchedMoviesList;