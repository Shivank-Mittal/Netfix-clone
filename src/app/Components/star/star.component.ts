import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];


  constructor() {
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }

  getStart(i: number) {
    if (this.rating >= i + 1) {
      return "start";
    }
    else {
      return "star_border"
    }
  }


  onClick(i: number) {
    this.rating = i + 1
  }


}
