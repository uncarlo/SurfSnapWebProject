// https://github.com/angular/angular-cli#installation

// [CT] Loads all the RxJS extensions
import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';

// Firebase
import { AngularFireModule, AngularFire } from 'angularfire2';

import { AppRoutingModule }     from "./app-routing/app-routing.module";

import { AppComponent } from './app.component';
import { AlertModule } from "ng2-bootstrap";
import { SearchComponent } from './search/search.component';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { LocationListComponent } from './location-list/location-list.component';
import { PictureDetailComponent } from './picture-detail/picture-detail.component';

// SERVICES
import { PictureService } from './picture-service/picture.service';
import { FirebaseService } from './firebase-service/firebase.service';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDcFlBiqXrK2PBWgrzSuExBI4k7Z9_JyTs',
  authDomain: 'surfsnap-ff58f.firebaseapp.com',
  databaseURL: 'https://surfsnap-ff58f.firebaseio.com/',
  storageBucket: 'gs://surfsnap-ff58f.appspot.com',
  messagingSenderId: '741255958756'
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PictureViewComponent,
    PictureViewComponent,
    LocationListComponent,
    PictureDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    DatePickerModule
  ],
  providers: [
    PictureService,
    AngularFire,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
