import { Component } from '@angular/core';
import {ITvShow} from '../ITvShow';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
  current: ITvShow = {
    title: "New Girl",
    image: "picture here",
    genres: "Comedy",
    status: "ended",
    rating: 3.4,
    summary: "Quirky gal moves in several roommates, silliness ensues"
  }
}
