import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Ang  getLatestMovies(): any {
    throw new Error("Method not implemented.");
  }
ular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";


  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');

  }

  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=7d6517c4b74e82c280f4868e793e1aad`);
  }


  getMoviesDetails(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=7d6517c4b74e82c280f4868e793e1aad`);
  }

 

}
