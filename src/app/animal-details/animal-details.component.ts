import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  animal: any = null;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (animalId !== null) {
      this.animalService.getAnimalById(+animalId).subscribe(data => {
        this.animal = data;
      });
    } else {
      console.error('id null');
    }
  }
}
