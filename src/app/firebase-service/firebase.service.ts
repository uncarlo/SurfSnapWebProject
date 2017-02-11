import {Injectable} from '@angular/core';

import {Picture}    from '../dtos/picture';
import {Country, State, Beach, City}   from '../dtos/location';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Subject, Observable} from "rxjs";

@Injectable()
export class FirebaseService {

  constructor(private angularFire: AngularFire) {
  }

  getPicture(countryName, stateName, cityName, beachName, pictureUid): Observable<Picture> {
    var picture =
      this.angularFire.database.object(`/Locations/${countryName}/states/${stateName}/cities/${cityName}/beaches/${beachName}/pictures/${pictureUid}`);

    return picture;
  }

  getPictures(countryName, stateName, cityName, beachName): Observable<Picture[]> {
    var pictures =
      this.angularFire.database.list(`/Locations/${countryName}/states/${stateName}/cities/${cityName}/beaches/${beachName}/pictures`) as Observable<Picture[]>;

    pictures = pictures.map(pictures => {
      for(var i = 0; i < pictures.length; i++) {
        pictures[i].dateTaken = new Date(pictures[i].dateTaken);
      }

      return pictures;
    });

    return pictures;
  }

  getLocations(): Observable<Country[]> {
    var locations = this.angularFire.database.list('/Locations/');

    return locations;
  }

  getStates(countryName): Observable<State[]> {
    var states = this.angularFire.database.list('/Locations/' + countryName + '/states/');

    return states;
  }

  getCities(countryName, stateName): Observable<City[]> {
    var cities = this.angularFire.database.list(`/Locations/${countryName}/states/${stateName}/cities/`);

    return cities;
  }

  getBeaches(countryName, stateName, cityName): Observable<Beach[]> {
    var beaches = this.angularFire.database.list('/Locations/' + countryName + '/states/' + stateName + '/cities/' + cityName + '/beaches/');

    return beaches;
  }
}
