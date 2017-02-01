import {Component, OnInit} from '@angular/core';

import {Country, State, Beach, City} from '../dtos/location'

import {FirebaseService} from "../firebase-service/firebase.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  private countries: Country[];
  private states: State[];
  private cities: City[];
  private beaches: Beach[];

  private expandedCountry: string;
  private expandedState: string;
  private expandedCity: string;

  constructor(private pictureService: FirebaseService) {
  }

  ngOnInit() {
    this.pictureService.getLocations().then(locations => this.countries = locations);
  }

  onLocationClick(countryName) {
    this.expandedCountry = countryName;

    this.pictureService.getStates(countryName).then(states => this.states = states);
  }

  onStateClick(countryName, stateName) {
    this.expandedState = stateName;

    this.pictureService.getCities(countryName, stateName).then(cities => this.cities = cities);
  }

  onCityClick(countryName, stateName, cityName) {
    this.expandedCity = cityName;

    this.pictureService.getBeaches(countryName, stateName, cityName).then(beaches => this.beaches = beaches);
  }
}
