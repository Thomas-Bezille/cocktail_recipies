import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1-225x300.jpg.webp',
    description:
      'Le Mojito est un cocktail traditionnel de la culture cubaine né dans les années 1910.  Il est réalisé avec du rhum, du citron vert et des feuilles de menthe fraîche. En 1920, le Mojito devient un véritable emblème de cette culture et obtient une renommée internationale et ceci encore aujourd’hui. Il possède le titre de « cocktail national de Cuba » !',
  };
}
