import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuration-tests',
  imports: [CommonModule],
  templateUrl: './structuration-tests.html',
  styleUrl: './structuration-tests.css',
})
export class StructurationTests {
  estEnChargement: boolean = true;
  messageSecret: string = "Le code du coffre est 1234";

  terminerChargement() {
    this.estEnChargement = false;
  }

  resetCharger() {
    this.estEnChargement = true;
  }

  // Une liste simple
  etudiants: string[] = ['Thomas', 'Sarah', 'Elodie', 'Karim'];

  // Une liste d'objets plus complexes
  produits = [
    { nom: 'Ordinateur', prix: 1000, enStock: true },
    { nom: 'Souris', prix: 20, enStock: false },
    { nom: 'Clavier', prix: 50, enStock: true }
  ];

  // pour tester le ngSwitch
  role: string = 'admin'; // Peut être 'admin', 'user', ou autre chose

}
