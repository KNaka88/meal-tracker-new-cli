import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MealService } from '../meal.service';


@Component({
  selector: 'createlog',
  templateUrl: './createlog.component.html',
  styleUrls: ['./createlog.component.css'],
  providers: [MealService]
})
export class CreatelogComponent {
  @Output() newMealSender = new EventEmitter();
  constructor(private modalService: NgbModal, private mealService: MealService) {}


  submitForm(name: string, detail: string, calories: number){
    var newMeal: Meal = new Meal(name, detail, calories);
    this.mealService.addMeal(newMeal);
    }

  //Modal
  closeResult: string;
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = ``;
      }, (reason) => {
        this.closeResult = ``;
      });
    }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  //Modal End
}
