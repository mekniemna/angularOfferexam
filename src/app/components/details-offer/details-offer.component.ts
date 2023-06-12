import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesService} from "../../services/services.service";
import {Course} from "../../models/course";

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent implements OnInit {
id!:any;
cour!:Course;
  constructor(private activatedRoute:ActivatedRoute,private courService:ServicesService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.id=params.get('id')!;
        this.courService.getCourseById(this.id).subscribe(
          data=>{
            this.cour=data;
          },
          error =>
            console.log(error)
        )

      }
    )
  }


}
