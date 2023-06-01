import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listMovie:Movie[]=[];

  constructor(private router:Router , private movieService:MovieService) { }

  ngOnInit(): void {
 this.fetchAllMovie();
  }





  navigate(id: number) {
    this.router.navigate(['/details',id]);
  }



  fetchAllMovie(){
    this.movieService.fetchMovies().subscribe(
      data=>{
        this.listMovie=data;
      },
      error=>{

      }
    )
  }

  affectRating(movie: Movie) {
    if(movie.raiting<5){
      movie.raiting=movie.raiting+1;
    }
    this.movieService.updateMovie(movie,movie.id).subscribe(
      data=>{
        this.fetchAllMovie();
      },
      error=>{

      }
    )

  }
}
