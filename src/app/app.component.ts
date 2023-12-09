import { Component } from '@angular/core';
import { ITvShow } from './ITvShow';
import { TvShowService } from './tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app2';

  currentTvShow: ITvShow = {
    title: '',
    medium: '',
    genres: '',
    status:  '',
    rating: 0,
    summary: '',
  }

  constructor(private tvshowService: TvShowService){
  }

  doSearch(searchValue: string){
    const userInput = searchValue
    this.tvshowService.getCurrentTvShow(userInput).subscribe(data => this.currentTvShow = data)
  }
}
