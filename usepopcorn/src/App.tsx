import {useEffect, useState} from "react";
import * as React from "react";
import NavBar from "./components/navbar/NavBar.tsx";
import Main from "./components/main/Main.tsx";
import NumResults from "./components/navbar/NumResults.tsx";
import MovieList from "./components/main/movie-list/MovieList.tsx";
import Box from "./components/main/Box.tsx";
import Summary from "./components/main/watched-movies-list/Summary.tsx";
import WatchedMoviesList from "./components/main/watched-movies-list/WatchedMoviesList.tsx";
import Loader from "./components/common/Loader.tsx";
import ErrorMessage from "./components/common/ErrorMessage.tsx";

const KEY = '6b0f4c12'
const tempMovieData = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
        imdbID: "tt0133093",
        Title: "The Matrix",
        Year: "1999",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
        imdbID: "tt6751668",
        Title: "Parasite",
        Year: "2019",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
];

const tempWatchedData = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

async function fetchMovies(
    query: string,
    callback: React.Dispatch<React.SetStateAction<[]>>,
    loadingCallback: React.Dispatch<React.SetStateAction<boolean>>,
    errorCallback: React.Dispatch<React.SetStateAction<string>>,) {
    loadingCallback(true)

    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)

        if (!res.ok) {
            throw new Error('Something went wrong with fetching movies!')
        }

        const data = await res.json();

        if (data.Response === 'False'){
            throw new Error("Movie not found.");
        }

        callback(data.Search);
    } catch(err) {
        console.error(err.message);
        errorCallback(err.message);
    } finally {
        loadingCallback(false)
    }
}

export const App: React.FC = () => {
    const [movies, setMovies] = useState<[]>([]);
    const [watched, setWatched] = useState<[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const query = "adwadawfegrsgseg"

    useEffect(function () {
        fetchMovies(query, setMovies, setIsLoading, setError);
    }, [])

    return (
        <>
            <NavBar>
                <NumResults moviesLength={movies.length}/>
            </NavBar>
            <Main>
                <Box>
                    {isLoading && <Loader/>}
                    {!isLoading && !error && <MovieList movies={movies}/>}
                    {error && <ErrorMessage message={error}/>}
                </Box>
                <Box>
                    <Summary watched={watched} />
                    <WatchedMoviesList watched={watched} />
                </Box>
            </Main>
        </>
    );
}

export default App;