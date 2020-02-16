import { Component, OnInit } from '@angular/core';
import { MovieService } from './Services/movie.service';
import { Movie } from './Models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  movieData: Movie[];

  constructor(private movieServ: MovieService){}

  ngOnInit() : void 
  {
    this.GetMovies();
  }

  GetMovies()
  {
    this.movieServ.GetMovies()
      .subscribe
      (
        data => { this.movieData = data; },
        error => { console.log(error); }
      );

  }
}
