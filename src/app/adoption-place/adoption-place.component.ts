import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AdopterService } from '../Services/adopter.service';

@Component({
  selector: 'app-adoption-place',
  templateUrl: './adoption-place.component.html',
  styleUrls: ['./adoption-place.component.css'],
  providers: [AdopterService]
})
export class AdoptionPlaceComponent implements OnInit {
  animals: any[] = [];
  species: string | null = '';

  constructor(
    private route: ActivatedRoute, 
    private animalService: AnimalService, 
    private adopterService: AdopterService
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit() started");
    this.species = this.route.snapshot.paramMap.get('espece');
    console.log("species: " + this.species);  
    if (this.species) {
      this.animalService.getAnimalsBySpecies(this.species).subscribe((data: any[]) => {
        this.animals = data;
      });
    }else{
      this.animalService.getAnimals().subscribe((data: any[]) => {
        this.animals = data;
      });
    }
  }

  OnAdopter(index:number){
    this.adopterService.OnAdopterClicked(this.animals[index]);
  }
}
