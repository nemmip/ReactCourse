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
import Search from "./components/navbar/Search.tsx";
import {Movie} from "./interfaces/Movie.ts";
import MovieDetails from "./components/main/movie-list/MovieDetails.tsx";
import {API_URL} from "./constatnts.ts";


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
    callback: React.Dispatch<React.SetStateAction<Movie[]>>,
    loadingCallback: React.Dispatch<React.SetStateAction<boolean>>,
    errorCallback: React.Dispatch<React.SetStateAction<string>>,) {

    loadingCallback(true)
    errorCallback("")

    try {
        const res = await fetch(`${API_URL}s=${query}`)

        if (!res.ok) {
            throw new Error('Something went wrong with fetching movies!')
        }

        const data = await res.json();

        if (data.Response === 'False') {
            throw new Error("Movie not found.");
        }

        callback(data.Search);
    } catch (err) {
        console.error(err.message);
        errorCallback(err.message);
    } finally {
        loadingCallback(false)
    }
}

export const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [watched, setWatched] = useState<[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<string | null>(null);


    useEffect(function () {
        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }
        fetchMovies(query, setMovies, setIsLoading, setError);
    }, [query])

    const handleSelectMovie = (id: string) => {
        setSelectedId(selectedId => selectedId === id ? null : id);
    }
    const handleCloseMovie = () => {
        setSelectedId(null);
    }

    return (
        <>
            <NavBar>
                <Search query={query} setQuery={setQuery}/>
                <NumResults moviesLength={movies.length}/>
            </NavBar>
            <Main>
                <Box>
                    {isLoading && <Loader/>}
                    {!isLoading && !error && <MovieList movies={movies} onMovieSelected={handleSelectMovie}/>}
                    {error && <ErrorMessage message={error}/>}
                </Box>
                <Box>
                    {
                        selectedId ? <MovieDetails selectedId={selectedId} onClose={handleCloseMovie}/> : <>
                            <Summary
                            watched={watched}/>
                            <WatchedMoviesList watched={watched}/>
                        </>
                    }
                </Box>
            </Main>
        </>
    );
}

export default App;