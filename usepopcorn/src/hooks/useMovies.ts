import {useEffect, useState} from "react";
import * as React from "react";
import {Movie} from "../interfaces/Movie.ts";
import {API_URL} from "../constatnts.ts";

async function fetchMovies(
    query: string,
    callback: React.Dispatch<React.SetStateAction<Movie[]>>,
    loadingCallback: React.Dispatch<React.SetStateAction<boolean>>,
    errorCallback: React.Dispatch<React.SetStateAction<string>>,
    signal: AbortSignal) {

    loadingCallback(true)
    errorCallback("")

    try {
        const res = await fetch(`${API_URL}s=${query}`, {signal})

        if (!res.ok) {
            throw new Error('Something went wrong with fetching movies!')
        }

        const data = await res.json();

        if (data.Response === 'False') {
            throw new Error("Movie not found.");
        }

        callback(data.Search);
    } catch (err) {
        if(err.name !== "AbortError") {
            console.error(err.message);
            errorCallback(err.message);
        }
    } finally {
        loadingCallback(false)
    }
}

export function useMovies(query: string, callback: (()=>void) | undefined) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(function () {
        callback?.()

        const controller = new AbortController()
        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }
        fetchMovies(query, setMovies, setIsLoading, setError, controller.signal);
        return ()=> {
            controller.abort();
        }
    }, [query])
    return {movies, isLoading, error}
}