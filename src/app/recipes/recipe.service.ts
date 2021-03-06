import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitze', 'This is A super tasty Schnitze- Awesome',
          'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_960_720.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
          ]) ,
          new Recipe(
              'Big Fat Burger', 'What else you need to say?',
          'https://p1.pxfuel.com/preview/178/700/862/outback-steak-burger-khobar.jpg',
          [
              new Ingredient('Buns', 2),
              new Ingredient('meat', 1)
          ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}