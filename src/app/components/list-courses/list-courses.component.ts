import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../../models/course";
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  listCourses:Course[]=[];

  constructor(private router:Router , private service:ServicesService) { }

  ngOnInit(): void {
    this.fetchAllCourses();
  }





  navigate(id: number) {
    this.router.navigate(['/details',id]);
  }



  fetchAllCourses(){
    this.service.fetchCourse().subscribe(
      data=>{
        this.listCourses=data;
      },
      error=>{

      }
    )
  }



}
