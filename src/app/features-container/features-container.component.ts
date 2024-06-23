import { Component } from '@angular/core';

@Component({
  selector: 'app-features-container',
  templateUrl: './features-container.component.html',
  styleUrls: ['./features-container.component.css']
})
export class FeaturesContainerComponent {
  animauxmenu = [
    {
      especes: 'Chat',
      name: 'chats',
      description: 'Grand classique des animaux de compagnie, autonomes et indépendants mais aussi joueur.',
      image: "https://ohbellachat.com/wp-content/uploads/2022/10/cat-pet-animals-6463284-1024x686.jpg.webp"
    },
    {
      especes: 'Chien',
      name: 'Chiens',
      description: 'Le meilleur ami de l\'homme, fidèle et protecteur.',
      image: "https://img.20mn.fr/2c2xoZqdQhu84Dmhb8ci9Sk/1444x920_le-berger-australien-est-le-chien-prefere-des-francais"
    },
    {
      especes: 'Furet',
      name: 'Furets',
      description: 'Petit animal de compagnie très joueur et curieux.',
      image: "https://www.club-furet.fr/wp-content/uploads/2021/05/mustelides.jpg"
    },
    {
      
      especes: 'Lapin',
      name: 'Lapins',
      description: 'Animal de compagnie très doux et affectueux.',
      image: "https://www.vox-animae.com/wp-content/uploads/2023/10/Comportement-lapin.png"
    },
    {
      especes: 'Poisson Rouge',
      name: 'Poissons Rouge',
      description: 'Animal de compagnie très relaxant et apaisant.',
      image: "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2018-11/poisson-rouge-100122.jpg"
    },
    {
      especes: 'Perroquet',
      name: 'Perroquets',
      description: 'Animal de compagnie très intelligent et bavard.',
      image: "https://images.ctfassets.net/b85ozb2q358o/DduFF2ZO9LveIPAlydUSz/126149fe6d5b7002415f475ed4100979/les-couleurs-des-perroquets-1.jpg"
    }
    
  ];

  // currentSlide = 0;

  // prevSlide() {
  //   this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.animals.length - 1;
  //   this.updateSlidePosition();
  // }

  // nextSlide() {
  //   this.currentSlide = (this.currentSlide < this.animals.length - 1) ? this.currentSlide + 1 : 0;
  //   this.updateSlidePosition();
  // }

  // updateSlidePosition() {
  //   const slides = document.querySelector('.animal-slides') as HTMLElement;
  //   slides.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  // }
}