import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-tests',
  imports: [FormsModule], // Importation du module FormsModule pour le data binding
  templateUrl: './binding-tests.html', // Le fichier HTML associé
  styleUrl: './binding-tests.css',
})

export class BindingTests {
  constructor() {
    console.log("Le code du module BindingTests s'exécute !");
    // Vous pouvez mettre ici des appels API, des calculs, etc.
  }

  pseudo: string = 'Batman';
  avatar: string = 'batman.png';
  estFatigue: boolean = true;

  // 2. Une méthode (Le comportement)
  rechargerEnergie() {
    this.estFatigue = false;
    alert('Batteries rechargées !');
  }
}
