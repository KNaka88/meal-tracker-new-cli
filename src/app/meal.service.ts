import { Injectable } from '@angular/core';
import { Meal } from './meal.model';
import { MEALS } from './mock-meals';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MealService {
  meals: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire){
    this.meals = angularFire.database.list('meals');
  }

  getMeals() {
    return this.meals;
  }

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
  }

}
