import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }
  
  getCurrentTvShow(singlesearch: string) {

    this.httpClient.get<ITvShowData>(`https://api.tvmaze.com/singlesearch/shows?q=${singlesearch}`)
  }
}
