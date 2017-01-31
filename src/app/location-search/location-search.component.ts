import {Component, OnInit} from '@angular/core';

import {Country, State, Beach, City} from '../dtos/location'

import {FirebaseService} from "../firebase-service/firebase.service";

@Component({
    selector: 'app-location-search',
    templateUrl: './location-search.component.html',
    styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

    private countries: Country[];
    private states: State[];
    private cities: City[];
    private beaches: Beach[];

    constructor(private pictureService: FirebaseService) {
    }

    ngOnInit() {
        this.pictureService.getLocations().then(locations => this.countries = locations);
    }

    onLocationClick(countryName) {
      this.pictureService.getStates(countryName).then(states => this.states = states);
    }

    onStateClick(countryName, stateName) {
      this.pictureService.getCities(countryName, stateName).then(cities => this.cities = cities);
    }

    onCityClick(countryName, stateName, cityName) {
      this.pictureService.getBeaches(countryName, stateName, cityName).then(beaches => this.beaches = beaches);
    }
}
