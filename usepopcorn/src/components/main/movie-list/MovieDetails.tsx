import React, {useEffect, useState} from 'react';
import {API_URL} from "../../../constatnts.ts";
import {isMovieInfo, MovieInfo} from "../../../interfaces/MovieInfo.ts";
import StarRating from "../star/StarRating.tsx";
import Loader from "../../common/Loader.tsx";

async function fetchMovieDetails(id: string,
                                 movieCallback: React.Dispatch<React.SetStateAction<MovieInfo | object>>,
                                 loadingCallback: React.Dispatch<React.SetStateAction<boolean>>) {
    loadingCallback(true)
    const res = await fetch(API_URL + 'i=' + id)
    const data = await res.json();
    movieCallback({
        title: data.Title,
        year: data.Year,
        poster: data.Poster,
        runtime: data.Runtime,
        imdbRating: data.imdbRating,
        plot: data.Plot,
        released: data.Released,
        actors: data.Actors,
        director: data.Director,
        genre: data.Genre,
    })
    loadingCallback(false)
}

const MovieDetails: React.FC<{
    selectedId: string;
    onClose: () => void;
}> = ({selectedId, onClose}) => {
    const [movie, setMovie] = useState<MovieInfo | object>({})
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(function () {
        fetchMovieDetails(selectedId, setMovie, setIsLoading);
    }, [selectedId]);

    return (
        <div className="details">
            {isLoading ? <Loader/> :
                <>
                    <header>
                        <button className="btn-back" onClick={onClose}>&larr;</button>
                        {
                            isMovieInfo(movie) &&
                            <>
                                <img src={movie.poster} alt={`Poster of ${movie.title}`}/>
                                <div className="details-overview">
                                    <h2>{movie.title}</h2>
                                    <p>{movie.released} &bull; {movie.runtime}</p>
                                    <p>{movie.genre}</p>
                                    <p>
                                        <span>⭐</span>
                                        {movie.imdbRating} IMDb rating
                                    </p>
                                </div>
                            </>
                        }
                    </header>
                    {
                        isMovieInfo(movie) &&
                        <section>
                            <div className="rating">
                                <StarRating/>
                            </div>
                            <p><em>{movie.plot}</em></p>
                            <p>Starring {movie.actors}</p>
                            <p>Directed by {movie.director}</p>
                        </section>
                    }
                </>}
        </div>
    );
};

export default MovieDetails;