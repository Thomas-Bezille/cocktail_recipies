import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1-225x300.jpg.webp',
      description:
        'Le Mojito est un cocktail traditionnel de la culture cubaine né dans les années 1910.  Il est réalisé avec du rhum, du citron vert et des feuilles de menthe fraîche. En 1920, le Mojito devient un véritable emblème de cette culture et obtient une renommée internationale et ceci encore aujourd’hui. Il possède le titre de « cocktail national de Cuba » !',
    },
    {
      name: 'Piña Colada',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-pina-colada-225x300.jpg.webp',
      description:
        'La Piña Colada est un délicieux mélange de lait de coco, jus d’ananas et de rhum. Ce cocktail se traduit littéralement par « ananas-pressé ». La Piña Colada est la boisson nationale de Porto Rico.',
    },
    {
      name: 'Sex On The Beach',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-sex-on-the-beach-2-225x300.jpg.webp',
      description:
        'Le Sex On The Beach est un cocktail à étages alcoolisé à base de vodka à laquelle on ajoute du jus d’ananas, de cranberry, de melon et de la crème de pêche. Un cocktail créé en plein Spring Break en Floride en 1987. Il existe de nombreuses recettes revisitées du Sex On the Beach pour faciliter sa réalisation car ce cocktail nécessite des ingrédients pas toujours simples à s’approprier. Découvrez quelques recettes de cocktails originaux dont la vodka a été remplacée : le Casa on the Beach ou Fun On The Beach',
    },
    {
      name: 'Gin Tonic',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Gin-tonic-214x300.jpg.webp',
      description:
        'L’incontournable Gin Tonic est un cocktail réalisé avec du gin et de l’eau tonique. En 1741, le gin était utilisé pour des fins médicinales mais son goût trop amer poussa à le marier avec une eau tonic pour atténuer son goût. Le Gin Tonic est maintenant un grand classique des bars ! Pour en savoir plus, découvrez l’Histoire du gin et du gin tonic. Et pour aller encore plus loin, testez nos meilleures associations mets-gin pour un apéritif réussi.',
    },
    {
      name: 'Margarita',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-margarita-2-225x300.jpg.webp',
      description:
        'La Margarita est un cocktail inventé par les Américains au Mexique. C’est un cocktail constitué de tequila, de triple sec et de jus de citron vert. Ce cocktail aurait été créé en 1948 par Margaret Sames dite « Margarita » en Espagnol, ce qui donna le nom au cocktail.',
    },
    {
      name: 'Ti’Punch',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-ti-punch-1-1.jpg.webp',
      description:
        'Le Ti’Punch est le cocktail traditionnel des Antilles Françaises. Il est préparé avec du rhum blanc, du sirop de canne ainsi que du citron vert. L’Histoire avec un grand « H » nous raconte qu’à l’époque où la culture de la canne à sucre était un dur labeur, le rhum permettait aux travailleurs de tenir leur journée.',
    },
    {
      name: 'Spritz',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2022/12/cocktail-spritz-1-225x300.jpg.webp',
      description:
        'Le Spritz est un des cocktails les plus tendances depuis quelques années. Comme beaucoup pourraient le penser, le Spritz n’a pas des origines italiennes mais bien autrichiennes. Son origine remonte au 19ème siècle lorsque Venise est envahie par les soldats autrichiens. Les Autrichiens trouvaient les vins italiens beaucoup trop forts. Alors afin de les adoucir, ils décidèrent de les couper avec de l’eau gazeuse. C’est ainsi qu’est né le premier Spritz !',
    },
    {
      name: 'Caïpirinha',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-caipirinha-3-225x300.jpg.webp',
      description:
        'La Caïpirinha aurait été imaginée dans les années 1920 du côté de Sao Paulo. Il s’agissait d’une boisson médicinale destinée à lutter contre la fièvre espagnole qui sévissait dans les campagnes, tout comme le Gin Tonic. Une boisson dont la recette différait légèrement de la recette actuelle puisque les paysans y ajoutaient du miel et de l’ail. C’est d’ailleurs ces origines rurales qui lui donnent son nom qui viendrait de « caïpra » pour paysans et « curupirinha » qui signifie habitant de la forêt.',
    },
    {
      name: 'Mangue Royale',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2021/06/cocktail-mangue-royale.jpg.webp',
      description:
        'La Mangue Royale est un cocktail très fruité à base de crème de mangue, de champagne et de fruits rouges. C’est une version revisitée du Kir Royal. Le Kir Royal est composé de champagne et de crème de cassis.  L’origine de ce cocktail remonte dans les années 60, le chanoine Kir, maire de Dijon avait pour habitude d’offrir à ses invités du Bourgogne avec de la crème de cassis pour l’apéritif.',
    },
    {
      name: 'Cuba Libre',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2018/04/cocktail-cuba-libre-1-225x300.jpg.webp',
      description:
        'Le nom de ce cocktail date de 1898, année de la perte de Cuba par les Espagnols, et de la fin de la guerre d’indépendance cubaine avec les États-Unis. Selon la légende, ce nom viendrait d’un soldat américain qui commandant une boisson à base de cola, de citron et de rhum, porta un toast « Por Cuba libre ! » (Pour un Cuba libre !). Ce cocktail est composé de rhum, de jus de citron jaune et de cola.',
    },
  ]);

  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(
    this.cocktails$.value[0]
  );

  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.cocktails$.value[index]);
  }

  constructor() {}
}
