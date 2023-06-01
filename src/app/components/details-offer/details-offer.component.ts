import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesService} from "../../services/services.service";
import {Offer} from "../../models/offer.model";
import {of} from "rxjs";
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent implements OnInit {
idfilm!:any;
movie!:Movie;
  constructor(private activatedRoute:ActivatedRoute,private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.idfilm=params.get('id')!;
        this.movieService.getMovieById(this.idfilm).subscribe(
          data=>{
            this.movie=data;
          },
          error =>
            console.log(error)
        )

      }
    )
  }

  removeFilm(id: number) {
    this.movieService.removeMovie(id).subscribe(
      data=>{
        this.router.navigate(['/home']);
      }
      ,
      error=>{

      }
    )

  }
}
