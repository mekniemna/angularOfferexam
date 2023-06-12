import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  fetchCourse(){
    return this.http.get<Course[]>(' http://localhost:3000/courses')
  }
  addCourse(data:Course){
    return this.http.post<Course>('http://localhost:3000/courses',data);
  }
  removeCourse(id:any){
    return this.http.delete<Course>('http://localhost:3000/courses/'+id);
  }
  getCourseById(id:any){
    return this.http.get<Course>('http://localhost:3000/courses/'+id)
  }
  updateCourse(data:Course,id:any):Observable<Course>{
    return this.http.put<Course>('http://localhost:3000/courses/'+id,data)
  }
}
