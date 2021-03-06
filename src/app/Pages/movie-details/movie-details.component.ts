import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie-service/movie.service';
import { MovieEntity } from '../../Model/movie';

import { netfix_logo } from '../../Services/const';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  subs: Subscription[] = [];
  movieEntity: MovieEntity;
  netflixLogo = netfix_logo;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }


  ngOnInit(): void {
    this.subs.push(
      this.activeRoute.paramMap.subscribe(
        data => {
          console.log(`Url obtained is : ${data.get('movieTitle')}`);
          this.getMovieDetails(data.get('movieTitle'))
        },
        (error) => console.log("error in fetching the rote parameter"),
        () => {
        }
      )
    )

  }

  getMovieDetails(movieTitle: String) {
    console.table(`Movie title is : ${movieTitle}`);
    this.movieService.getMovieDetails(movieTitle.replace(/ /g, "+")).subscribe(
      data => {
        console.table(data);
        this.movieEntity = data;
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach(s => s.unsubscribe())
  }

  goToWelcomeScreen() {
    this.router.navigate(['/welcome'])
  }

}
