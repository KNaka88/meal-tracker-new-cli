import { Component, Input } from '@angular/core';
import { Meal } from '../meal.model';
import { CreatelogComponent } from '../createlog/createlog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  @Input() newMealSender: Meal;



  masterMeals: Meal[] = [
    new Meal("Cream Pasta", "for lunch", 300),
    new Meal("Chocolate Cake", "for dinner", 450),
    new Meal("Cheff's Special Pizza", "Party", 1300)
  ];

  addMeal(newMeal: Meal){
    this.masterMeals.push(newMeal);
  }

}
