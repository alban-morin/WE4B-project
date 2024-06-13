import { Component, OnInit } from '@angular/core';
import { AdopterService } from '../Services/adopter.service';
import { AnimalService } from '../Services/animal.service';

@Component({
  selector: 'app-animal-container',
  templateUrl: './animal-container.component.html',
  styleUrls: ['./animal-container.component.css'],
  providers: [AdopterService, AnimalService]
})
export class AnimalContainerComponent implements OnInit {
  

  constructor(private adopterService: AdopterService, private animalService: AnimalService) {

   }

  ngOnInit(): void {
    this.animals = this.animalService.animals;
  }

  OnAdopter(index:number){
    this.adopterService.OnAdopterClicked(this.animals[index]);
  }

  animals:{nom:string, espece:string, race:string, age:string, sexe:string, description:string, photo:string}[]=[];
}
