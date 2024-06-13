import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animals=[
    {nom:"Rex", espece:"Chien", race:"Berger Allemand", age:"5", sexe:"Mâle", description:"Rex est un chien très joueur et affectueux. Il adore les enfants et les autres animaux. Il est très obéissant et il est déjà éduqué. Il est pucé et vacciné.", photo:"https://images.ctfassets.net/denf86kkcx7r/53Sq2GH470TPjioLFw9cDl/ad96e3bef463804fb2b5379b8ae24de9/berger_allemand_fiche_race_santevet_assurance"},
      {
        nom: "Mistigri",
        espece: "Chat",
        race: "Européen",
        age: "3",
        sexe: "Femelle",
        description: "Mistigri est une chatte très indépendante mais câline à ses heures. Elle aime jouer avec des plumes et se prélasser au soleil. Elle est stérilisée et à jour dans ses vaccins.",
        photo: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // Photo d'un chat européen
      },
    
      {
        nom: "Caramel",
        espece: "Lapin",
        race: "Nain Bélier",
        age: "1",
        sexe: "Mâle",
        description: "Caramel est un lapin très doux et sociable. Il adore les carottes et les câlins. Il est propre et vit en liberté dans la maison.",
        photo: "https://images.ctfassets.net/b85ozb2q358o/3lOtqK3SL3zJD6IsOwtFvr/2e60230858a6ef7b7696902d4f744d65/le-caractere-du-lapin-nain-belier-1.jpg" // Photo d'un lapin bélier
      },
    
      {
        nom: "Charlie",
        espece: "Perroquet",
        race: "Gris du Gabon",
        age: "8",
        sexe: "Mâle",
        description: "Charlie est un perroquet très intelligent et bavard. Il connaît plusieurs mots et phrases. Il aime jouer avec des jouets interactifs et se faire gratter la tête.",
        photo: "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2019-08/perroquet-gris-gabon-1-100702.jpg" // Photo d'un perroquet gris du Gabon
      },
    
      {
        nom: "Sushi",
        espece: "Poisson Rouge",
        race: "", // Pas de race spécifique pour les poissons rouges
        age: "2",
        sexe: "Inconnu", // Souvent difficile à déterminer pour les poissons
        description: "Sushi est un poisson rouge très vif et coloré. Il aime nager dans son aquarium et manger des flocons. Il cohabite avec d'autres poissons de son espèce.",
        photo: "https://www.oobaooba.fr/img/post/24.jpg" // Photo d'un poisson rouge
      }, 
      {
        nom: "Sushi",
        espece: "Poisson Rouge",
        race: "", // Pas de race spécifique pour les poissons rouges
        age: "2",
        sexe: "Inconnu", // Souvent difficile à déterminer pour les poissons
        description: "Sushi est un poisson rouge très vif et coloré. Il aime nager dans son aquarium et manger des flocons. Il cohabite avec d'autres poissons de son espèce.",
        photo: "https://www.oobaooba.fr/img/post/24.jpg" // Photo d'un poisson rouge
      } 
    ];

  constructor() { }

  getAnimals(){
    return this.animals;
  }

}
