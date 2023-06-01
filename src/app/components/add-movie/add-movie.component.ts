import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
movie:Movie=new Movie();
  constructor(private  movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
  }

  save(f: NgForm) {
    this.movie=f.value;
    this.movie.raiting=0;
    this.movie.nomSalle='carthage';
    this.movieService.addMovie(this.movie).subscribe(
      data=>{
        this.router.navigate(['/home']);

        console.log(data)
      },
      error => {
        console.log(error)
      }

    )


  }
}
