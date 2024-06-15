import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptionPlaceComponent } from './adoption-place/adoption-place.component';
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'adoptionplace/:espece', component : AdoptionPlaceComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
