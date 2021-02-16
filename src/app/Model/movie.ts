export interface MovieEntity {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface Movies {
    Search: MovieEntity[];
    totalResults: string;
    Response: string;
}