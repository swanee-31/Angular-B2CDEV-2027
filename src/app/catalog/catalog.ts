import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { form } from '@angular/forms/signals';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  description: string;
  quantity: number; // Ajout de la propriété quantity
  showDetails: boolean; // Ajout de la propriété showDetails
  imageUrl?: string; // Ajout de la propriété imageUrl pour l'image du livre
}

@Component({
  imports: [MatButtonModule, MatCardModule, 
    CommonModule, FormsModule, NgOptimizedImage,
    MatFormFieldModule, MatSelectModule, MatInputModule],
  selector: 'app-catalog',
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})

export class CatalogComponent {
  // Liste des livres avec les nouvelles propriétés
  books: Book[] = [
    {
      id: 1,
      title: 'Dune',
      author: 'Franck Herbert',
      year: 1965,
      genre: 'Fiction',
      description: 'Dune is a 1965 epic science fiction novel',
      quantity: 3,
      showDetails: true,
      imageUrl: 'Dune.jpg' // URL de l'image du livre'
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Author 2',
      year: 2020,
      genre: 'Non-Fiction',
      description: 'Description of Book 2',
      quantity: 0,
      showDetails: false,
    },
    {
      id: 3,
      title: 'Les robots',
      author: 'Isaac Asimov',
      year: 2018,
      genre: 'Fiction',
      description: 'Les Robots est un recueil de nouvelles d\'Isaac Asimov publié en 1950. Il explore les interactions entre les humains et les robots, mettant en avant les Trois Lois de la Robotique.',
      quantity: 5,
      showDetails: false,
      imageUrl: 'les-robots.jpg' // URL de l'image du livre'
    }
    // Ajoutez d'autres livres ici
  ];

  // Propriété pour le filtre
  filterStock: string = 'all';

  // Méthode pour basculer l'affichage des détails
  toggleDetails(book: Book): void { 
    book.showDetails = !book.showDetails;
  }

  // Méthode pour incrémenter la quantité
  incrementStock(book: Book): void {
    book.quantity++;
  }

  // Méthode pour décrémenter la quantité
  decrementStock(book: Book): void {
    if (book.quantity > 0) {
      book.quantity--;
    }
  }

  // Méthode pour filtrer les livres
  getFilteredBooks(): Book[] {
    if (this.filterStock === 'inStock') {
      return this.books.filter(book => book.quantity > 0);
    } else if (this.filterStock === 'outOfStock') {
      return this.books.filter(book => book.quantity === 0);
    }
    return this.books;
  }

  // Méthode pour le tracking des livres dans la boucle
  trackByTitle(index: number, book: Book): string {
    return book.title;
  }
}