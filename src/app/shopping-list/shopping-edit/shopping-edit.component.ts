import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameInputRef: ElementRef
  @ViewChild('amount') amountInputRef: ElementRef

  @Output() ingredientEdit = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const cName = this.nameInputRef.nativeElement.value;
    const cAmount = this.amountInputRef.nativeElement.value;
    const cIngredientEdit = new Ingredient(cName, cAmount);
    this.ingredientEdit.emit(cIngredientEdit);
  }
}
