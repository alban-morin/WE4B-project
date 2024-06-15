import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AdoptionPlaceComponent } from './adoption-place/adoption-place.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService } from './animal.service';
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
    AdoptionPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
