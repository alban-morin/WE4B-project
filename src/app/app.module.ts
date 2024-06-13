import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesContainerComponent } from './features-container/features-container.component';
import { CookieComponent } from './cookie/cookie.component';
import { AnimalContainerComponent } from './animal-container/animal-container.component';
import { AnimalService } from './Services/animal.service';
import { AnimalComponent } from './animal/animal.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FeaturesContainerComponent,
    CookieComponent,
    AnimalContainerComponent,
    AnimalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    AnimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
