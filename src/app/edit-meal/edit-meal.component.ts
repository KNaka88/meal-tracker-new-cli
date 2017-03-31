import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import { IndexComponent } from '../index/index.component';
import { MealListComponent} from '../meal-list/meal-list.component'


@Component({
  selector: 'edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() saveMealSender = new EventEmitter();

  saveEdit(){
    this.saveMealSender.emit();
  }

}
