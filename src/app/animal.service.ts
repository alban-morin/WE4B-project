// animal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'http://localhost:3000/animals'; // URL du serveur json-server

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getAnimalById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  getAnimalsBySpecies(species: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?espece=${species}`);
  }

  // Ajoutez d'autres méthodes pour créer, mettre à jour et supprimer des animaux si nécessaire
}