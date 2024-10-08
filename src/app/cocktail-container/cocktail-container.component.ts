import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss',
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktail[] = [];
  public selectedCocktail: Cocktail;

  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );

    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selectedCocktail: Cocktail) => {
          this.selectedCocktail = selectedCocktail;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectCocktail(index: number): void {
    this.cocktailService.selectCocktail(index);
  }
}
