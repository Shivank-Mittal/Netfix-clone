import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Services/movie-service/movie.service';

import { netfix_logo, avatar } from '../../../Services/const';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  subs: Subscription[] = [];

  sticky = false;

  netflix_image = netfix_logo;
  avatar = avatar;
  favorate: Movies;
  latest: Movies;
  headerBGUrl;
  headerBGTitle;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
  }

  @ViewChild('stickyHeader') header: ElementRef;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subs.push(
      this.movieService.getlatestMovies().subscribe(
        (data) => {
          this.latest = data; console.log(`Latest movie are : ${data}`);
          let headerBG = this.latest.Search[2]
          this.headerBGUrl = headerBG.Poster;
          this.headerBGTitle = headerBG.Title

        },
        (error) => console.log(`Error in loding latestMovies is : ${error}`),
        () => console.log(`Latest movies load completed`)
      )
    );
    this.subs.push(
      this.movieService.getFavorateMovies().subscribe(
        data => this.favorate = data,

        (error) => console.log(`Error in loding FavorateMovies is : ${error}`),
        () => console.log(`Favorate movies load completed`)
      )
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.map(s => s.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windoScroll = window.pageYOffset;

    if (windoScroll > this.header.nativeElement.offsetHeight) {
      this.sticky = true
    }
    else {
      this.sticky = false;
    }
  }
}
