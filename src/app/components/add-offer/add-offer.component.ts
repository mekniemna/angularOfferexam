import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Offer} from "../../models/offer.model";
import {ServicesService} from "../../services/services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
offer!:Offer;
  constructor(private offerService:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  save(f: NgForm) {
    console.log(f.value);
    this.offer=f.value;
    this.offerService.addOffer(this.offer).subscribe(
      data=>{
        console.log(data);

      },
      error => console.log(error)
    )
    console.log(this.offer);

  }

}
