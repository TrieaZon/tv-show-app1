import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITvShowData } from './itv-show-data';
import { ITvShow } from './ITvShow';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }  //var name:  var type
  
  getCurrentTvShow(singlesearch: string) {

    return this.httpClient.get<ITvShowData>(`https://api.tvmaze.com/singlesearch/shows?q=${singlesearch}`).pipe(map(data => this.transformToTvShow(data)))
  }  //get filtered data from fuunction and map to first interface
  //pipe gets observable, then map removes observable and unwraps to give to function
  
  transformToTvShow(data: ITvShowData): ITvShow{
    return {          //2nd interface filtered API data -> map to first interface model
      title: data.name,
      genres: data.genres[0],
      status: data.status,
      rating: data.rating.average,
      medium: data.image.medium,
      summary: data.summary.replaceAll(/<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|<[^>]*>/g, ' '),
    }
  }
}
