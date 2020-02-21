import { Injectable } from '@angular/core';
import { Config } from 'src/Config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly config = new Config();
  private _url = this.config.service_api;

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<Movie[]>
  {
    return this.http.get(this._url, )
    .pipe(map(res => JSON.parse(JSON.stringify(res))));;
  }
}
