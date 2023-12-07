import { Component, Input } from '@angular/core';
import {ITvShow} from '../ITvShow';
// import { TvShowService } from '../tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})


export class TvShowComponent {
  @Input() current: ITvShow = {
    title: '',
    image: '',
    genres: '',
    status:  '',
    rating: 0,
    summary: '',
  }

  // constructor(private tvshowService: TvShowService){

  //   this.tvshowService.getCurrentTvShow().subscribe(data => this.current = data)

  // }


}
