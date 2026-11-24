import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  description: string;
  available: boolean;
}

@Component({
  imports: [MatButtonModule, MatCardModule],
  selector: 'app-catalog',
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {
  books: Book[] = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      year: 1943,
      genre: 'Conte',
      description: 'Un récit poétique et philosophique sur l’amitié, l’enfance et le regard porté sur le monde.',
      available: true,
    },
    {
      id: 2,
      title: 'L’Étranger',
      author: 'Albert Camus',
      year: 1942,
      genre: 'Roman',
      description: 'Le parcours de Meursault, dont le regard singulier interroge les conventions de la société.',
      available: true,
    },
    {
      id: 3,
      title: 'Les Misérables',
      author: 'Victor Hugo',
      year: 1862,
      genre: 'Classique',
      description: 'Une grande fresque humaine autour de Jean Valjean et de la quête de justice et de rédemption.',
      available: false,
    },
    {
      id: 4,
      title: 'La Peste',
      author: 'Albert Camus',
      year: 1947,
      genre: 'Roman',
      description: 'Dans une ville frappée par l’épidémie, ses habitants font face à l’isolement et à la solidarité.',
      available: true,
    },
    {
      id: 5,
      title: 'Vingt mille lieues sous les mers',
      author: 'Jules Verne',
      year: 1870,
      genre: 'Aventure',
      description: 'Une expédition extraordinaire à bord du Nautilus, sous la conduite du mystérieux capitaine Nemo.',
      available: true,
    },
    {
      id: 6,
      title: 'Notre-Dame de Paris',
      author: 'Victor Hugo',
      year: 1831,
      genre: 'Classique',
      description: 'Une histoire passionnée et dramatique au cœur du Paris médiéval et de sa célèbre cathédrale.',
      available: false,
    },
  ];

  toggleAvailability(book: Book): void {
    book.available = !book.available;
  }
}
