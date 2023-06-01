import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailsOfferComponent} from "./components/details-offer/details-offer.component";
import {AddMovieComponent} from "./components/add-movie/add-movie.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addfilm', component: AddMovieComponent },
  { path: 'details/:id', component: DetailsOfferComponent },
  {path:'',    redirectTo: '/home',      pathMatch: 'full'},
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
