import { Component, Input } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  @Input() public cocktails: Cocktail[];
}
