import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ServicesService} from "../../services/services.service";
import {Course} from "../../models/course";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course:Course=new Course();
  constructor(private  courseService:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  save(f: NgForm) {
    this.course.like=0;
    this.course.dislike=0
    this.courseService.addCourse(this.course).subscribe(
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
