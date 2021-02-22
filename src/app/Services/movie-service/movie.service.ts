import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { latestMovies, favorateMovies, movieDeatils, apikey } from '../const';
import { MovieEntity, Movies } from '../../Model/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getlatestMovies(): Observable<Movies> {
    return this.http.get<Movies>(latestMovies)
  }

  getFavorateMovies(): Observable<Movies> {
    return this.http.get<Movies>(favorateMovies)
  }

  getMovieDetails(movieTitle) {
    return this.http.get<MovieEntity>(movieDeatils + movieTitle + "&apikey=" + apikey);
  }
}
