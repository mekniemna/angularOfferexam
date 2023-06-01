import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../models/offer.model";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  fetchMovies(){
    return this.http.get<Movie[]>(' http://localhost:3000/movies')
  }
  addMovie(data:Movie){
    return this.http.post<Movie>('http://localhost:3000/movies',data);
  }
  removeMovie(id:any){
    return this.http.delete<Movie>('http://localhost:3000/movies/'+id);
  }
  getMovieById(id:any){
    return this.http.get<Movie>('http://localhost:3000/movies/'+id)
  }
  updateMovie(data:Movie,id:any){
    return this.http.put<Movie>('http://localhost:3000/movies/'+id,data)
  }
}
