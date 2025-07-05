export interface MovieInfo {
    title: string;
    year: string;
    poster: string;
    runtime: string;
    imdbRating: string;
    plot: string;
    released: string;
    actors: string;
    director: string;
    genre: string;
}

export function isMovieInfo(movieInfo: object): movieInfo is MovieInfo {
    return (movieInfo as MovieInfo).title !== undefined;
}