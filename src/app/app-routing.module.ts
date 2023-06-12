import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {DetailsOfferComponent} from "./components/details-offer/details-offer.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {ListCoursesComponent} from "./components/list-courses/list-courses.component";

const routes: Routes = [
  { path: 'home', component: ListCoursesComponent },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'details/:id', component: DetailsOfferComponent },
  {path:'',    redirectTo: '/home',      pathMatch: 'full'},
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
