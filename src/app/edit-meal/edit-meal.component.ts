import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import { IndexComponent } from '../index/index.component';
import { MealListComponent} from '../meal-list/meal-list.component'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent {
  @Input() selectedMeal: Meal;
  @Input() clickSender: Meal;
  @Output() saveMealSender = new EventEmitter();

  saveEdit(){
    this.saveMealSender.emit();
  }


  //Modal
  closeResult: string;
  constructor(private modalService: NgbModal) {}
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
