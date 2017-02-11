import {Injectable} from '@angular/core';

import {Picture}    from '../dtos/picture';
import {Country, State, Beach, City}   from '../dtos/location';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Subject, Observable} from "rxjs";

@Injectable()
export class FirebaseService {

  constructor(private angularFire: AngularFire) {
    this.dateTakenSubject = new Subject();
  }

  getPicture(countryName, stateName, cityName, beachName, pictureUid): Observable<Picture> {
    var picture =
      this.angularFire.database.object(`/Locations/${countryName}/states/${stateName}/cities/${cityName}/beaches/${beachName}/pictures/${pictureUid}`);

    return picture;
  }

  private dateTakenSubject: Subject<any>;

  getPictures(countryName, stateName, cityName, beachName): Observable<Picture[]> {
    var pictures =
      this.angularFire.database.list(`/Locations/${countryName}/states/${stateName}/cities/${cityName}/beaches/${beachName}/pictures`,
        {
          query:{
            orderByChild: 'dateTaken',
            // equalTo: this.dateTakenSubject
          }
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
