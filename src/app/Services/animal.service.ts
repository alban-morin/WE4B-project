import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  Array : any[] = []
  constructor() { }

  getAnimals(){

    this.Array.push


    return this.Array;
  }

}
