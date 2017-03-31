import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { CreatelogComponent } from './createlog/createlog.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { CaloriesFilterPipe } from './calories-filter.pipe';

//Modal Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Firebase
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreatelogComponent,
    MealListComponent,
    EditMealComponent,
    CaloriesFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
