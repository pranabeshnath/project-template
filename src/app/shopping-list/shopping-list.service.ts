import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{

  private ingredients: Ingredient[] = [
      new Ingredient('Apples',5),
      new Ingredient("Pinapple",10)
    ];

  getIngredients(){
    this.ingredients.splice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
