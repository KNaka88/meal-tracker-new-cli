import { Component, Input } from '@angular/core';
import { Meal } from '../meal.model';
import { CreatelogComponent } from '../createlog/createlog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { ModalComponent } from '../modal/modal.component';
// import { AppModule } from '../app.module';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  @Input() newMealSender: Meal;

  selectedMeal: Meal = null;

  masterMeals: Meal[] = [
    new Meal("Cream Pasta", "for lunch", 300),
    new Meal("Chocolate Cake", "for dinner", 450)
  ];

  addMeal(newMeal: Meal){
    this.masterMeals.push(newMeal);
    console.log(this.masterMeals);
  }

  editMeal(clickedMeal){
    this.selectedMeal = clickedMeal;
  }

  finishedEditing(){
    this.selectedMeal = null;
  }
}
