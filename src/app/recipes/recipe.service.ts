import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

  constructor(private slsService: ShoppingListService){}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]=[
    new Recipe("Testy Recipe","Tasty French Fries","http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg",
      [
        new Ingredient('French Fries', 1),
        new Ingredient('Meat', 2)
      ]
      ),
    new Recipe("Another Testy Recipe","Some porrige","https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Cheesy-Cheddar-Broccoli-Casserole_EXPS_SDFM17_28900_C09_30_6b.jpg",
      [
        new Ingredient('Veggies', 1),
        new Ingredient('Rice', 100)
      ]
      )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppinglist(ingredients: Ingredient[]){
    this.slsService.addIngredient(ingredients[0]);
  }

}
