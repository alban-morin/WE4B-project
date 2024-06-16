import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptionPlaceComponent } from './adoption-place/adoption-place.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'Home', component : HomeComponent},
  {path : 'About', component : AboutComponent},   
  {path : 'adoptionplace/:espece', component : AdoptionPlaceComponent},
  {path : 'adoptionplace', component : AdoptionPlaceComponent},
  {path : '**', component : NotFoundComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
