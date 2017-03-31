import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {
  @Input() childMeals: Meal[];
  @Output() clickSender = new EventEmitter();

  editLog(meal: Meal){
    this.clickSender.emit(meal);
  }
}
