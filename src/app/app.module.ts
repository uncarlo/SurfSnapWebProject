// https://github.com/angular/angular-cli#installation

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from "./app-routing/app-routing.module";

import { AppComponent } from './app.component';
import { AlertModule } from "ng2-bootstrap";
import { SearchComponent } from './search/search.component';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { LocationSearchComponent } from './location-search/location-search.component';

// SERVICES
import { PictureService } from './picture-service/picture.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PictureViewComponent,
    PictureViewComponent,
    LocationSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
