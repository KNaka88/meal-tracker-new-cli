import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'caloriesFilter',
  pure: false
})

export class CaloriesFilterPipe implements PipeTransform {

  transform(input: Meal[], filterName){
    var output: Meal[] = [];

    for(var i=0; i<input.length; i++){
      switch(filterName){
        case "allMeals":
          output.push(input[i]);
          break;
        case "lessthan500":
          if(input[i].calories < 500) {
            output.push(input[i]);
          }
          break;
        case "morethan500":
          if(input[i].calories >= 500){
            output.push(input[i]);
          }
          break;
        default:
          alert("Unexpected Error Happened");
      }
    }
    return output;
  }
}
