import { Component } from '@angular/core';

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

  ngOnInit(): void {
    this.tvshowService.getCurrentTvShow('darling in the franxx')
    .subscribe(data => this.currentTvShow = data);
  } // this function initializes the home page with a completed search 

  doSearch(searchValue: string){
    const userInput = searchValue
    this.tvshowService.getCurrentTvShow(userInput).subscribe(data => this.currentTvShow = data)
  }
}
