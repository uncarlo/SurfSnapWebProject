import {Component, OnInit} from '@angular/core';

import {Country, State, Beach, City} from '../dtos/location'

import {FirebaseService} from "../firebase-service/firebase.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  private countries: Observable<Country[]>;
  private states: Observable<State[]>;
  private cities: Observable<City[]>;
  private beaches: Observable<Beach[]>;

  private expandedCountry: string;
  private expandedState: string;
  private expandedCity: string;

  constructor(private pictureService: FirebaseService) {
  }

  ngOnInit() {
    this.countries = this.pictureService.getLocations();
  }

  onLocationClick(countryName) {
    this.expandedCountry = countryName;

    this.states = this.pictureService.getStates(countryName)
  }

  onStateClick(countryName, stateName) {
    this.expandedState = stateName;

    this.cities = this.pictureService.getCities(countryName, stateName);
  }

  onCityClick(countryName, stateName, cityName) {
    this.expandedCity = cityName;

    this.beaches = this.pictureService.getBeaches(countryName, stateName, cityName);
  }
}
