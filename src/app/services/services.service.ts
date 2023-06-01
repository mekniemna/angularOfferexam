import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../models/offer.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  fetchMovies(){
    return this.http.get<Offer[]>(' http://localhost:3000/movies')
  }
  addOffer(data:Offer){
    return this.http.post<Offer>('http://localhost:3000/movies',data);
  }
  removeOffer(id:any){
    return this.http.delete<Offer>('http://localhost:3000/movies/'+id);
  }
  getOffreById(id:any){
    return this.http.get<Offer>('http://localhost:3000/movies/'+id)
  }
  updateOffre(data:Offer,id:any):Observable<Offer>{
    return this.http.put<Offer>('http://localhost:3000/movies/'+id,data)
  }
}
