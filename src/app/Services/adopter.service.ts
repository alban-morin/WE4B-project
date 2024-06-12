import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdopterService {
  constructor() { }
  OnAdopterClicked(animal: any){
    alert("Vous avez adopté " + animal.nom + " !")
  }
}