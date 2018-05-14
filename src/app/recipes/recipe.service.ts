import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]=[
    new Recipe("Test Recipe","Test Desc","http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg"),
    new Recipe("Another Test Recipe","Test Desc","https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Cheesy-Cheddar-Broccoli-Casserole_EXPS_SDFM17_28900_C09_30_6b.jpg")
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
