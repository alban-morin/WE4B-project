import { Component, Input } from '@angular/core';
import { AdopterService } from '../Services/adopter.service';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  @Input() animal: any;
  @Input() showDetailsButton: boolean = true;

  constructor(
    private adopterService : AdopterService
  ) { }

  OnAdopter(id:number, nom:string){
    this.adopterService.OnAdopterClicked(id,nom);
  }
}
