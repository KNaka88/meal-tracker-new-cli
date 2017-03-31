import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { CreatelogComponent } from './createlog/createlog.component';
import { MealListComponent } from './meal-list/meal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreatelogComponent,
    MealListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
