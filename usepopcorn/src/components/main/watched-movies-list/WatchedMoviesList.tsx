import React from 'react';
import {WatchedMovie} from "../../../interfaces/Movie.ts";
import WatchedMovieItem from "./WatchedMovieItem.tsx";

const WatchedMoviesList: React.FC<{
    watched: WatchedMovie[];
    onDeleteWatched: (id: string) => void;
}> = ({watched, onDeleteWatched}) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovieItem key={movie.imdbID} movie={movie} onDeleteWatched={onDeleteWatched} />
            ))}
        </ul>
    );
};

export default WatchedMoviesList;