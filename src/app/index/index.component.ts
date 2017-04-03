import { Component, Input, Output, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
import { CreatelogComponent } from '../createlog/createlog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [MealService]
})

export class IndexComponent implements OnInit {
  @Input() newMealSender: Meal;
  masterMeals: Meal[] = [];

  constructor(private router: Router, private mealService: MealService) {}

  ngOnInit(){
    this.mealService.getMeals().subscribe(result => {
      let mealArray: Meal[] = [];
      result.forEach(function(meal) {
        let newMeal = new Meal(meal.name, meal.detail, parseInt(meal.calories));
        mealArray.push(newMeal);
      });
      this.masterMeals = mealArray;
    });
  }

  addMeal(newMeal){
    this.masterMeals.push(newMeal);
  }

}
