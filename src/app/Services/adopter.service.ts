import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdopterService {
  private baseUrl = 'http://localhost:3000/animals';

  constructor(private http:HttpClient) {}

  deleteAnimal(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  OnAdopterClicked(animal: any) {
    this.deleteAnimal(animal.id).subscribe({
      next: (response) => {
        alert("Vous avez adopté " + animal.nom + " !");
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de l\'animal', err);
        alert("Une erreur est survenue lors de l'adoption de " + animal.nom + " !");
      }
    });
  }
}
