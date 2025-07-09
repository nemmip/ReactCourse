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
import {WatchedMovie} from "./interfaces/Movie.ts";
import MovieDetails from "./components/main/movie-list/MovieDetails.tsx";
import {useMovies} from "./hooks/useMovies.ts";
import {useLocalStorageState} from "./hooks/useLocalStorageState.ts";

export const App: React.FC = () => {

    const [query, setQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [watched, setWatched] = useLocalStorageState<WatchedMovie[]>([], "watched");
    const {movies, isLoading, error} = useMovies(query, handleCloseMovie)


    const handleSelectMovie = (id: string) => {
        setSelectedId(selectedId => selectedId === id ? null : id);
    }

    function handleCloseMovie() {
        setSelectedId(null);
    }

    const handleAddWatchedMovie = (movie: WatchedMovie) => {
        setWatched(watched => {
            const filtered = watched.filter(w => w.imdbID !== movie.imdbID)
            return [...filtered, movie];
        });
    }
    const handleDeleteWatched = (movieID: string) => {
        setWatched(watched => [...watched.filter(w => w.imdbID !== movieID)]);
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
                    {!isLoading && !error && <MovieList
                        movies={movies}
                        onMovieSelected={handleSelectMovie}
                    />}
                    {error && <ErrorMessage message={error}/>}
                </Box>
                <Box>
                    {
                        selectedId ? <MovieDetails
                            selectedId={selectedId}
                            onClose={handleCloseMovie}
                            onAddedWatchedMovie={handleAddWatchedMovie}
                            watchedMovie={watched.find(w => w.imdbID === selectedId)}
                        /> : <>
                            <Summary
                                watched={watched}/>
                            <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched}/>
                        </>
                    }
                </Box>
            </Main>
        </>
    );
}

export default App;