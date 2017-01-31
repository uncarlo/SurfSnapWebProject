import {Injectable} from '@angular/core';

import {Picture}    from '../dtos/picture';
import {Country, State, Beach, City}   from '../dtos/location';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {

  constructor(private angularFire: AngularFire) {
  }

  getPicture(countryName, stateName, cityName, beachName, pictureUid): Promise<Picture> {
    var picture =
      this.angularFire.database.object(`/Locations/${countryName}/states/${stateName}/cities/${cityName}/beaches/${beachName}/pictures/${pictureUid}`);

    return Promise.resolve(picture);
  }

  getPictures(countryName, stateName, cityName, beachName): Promise<Picture[]> {
    var pictures =
      this.angularFire.database.list(`/Locations/${countryName}/states/${stateName}/cities/${cityName}/beaches/${beachName}/pictures`);

    return Promise.resolve(pictures);
  }

  getLocations(): Promise<Country[]> {
    var locations = this.angularFire.database.list('/Locations/');

    return Promise.resolve(locations);
  }

  getStates(countryName): Promise<State[]> {
    var states = this.angularFire.database.list('/Locations/' + countryName + '/states/');

    return Promise.resolve(states);
  }

  getCities(countryName, stateName): Promise<City[]> {
    var cities = this.angularFire.database.list(`/Locations/${countryName}/states/${stateName}/cities/`);

    return Promise.resolve(cities);
  }

  getBeaches(countryName, stateName, cityName): Promise<Beach[]> {
    var beaches = this.angularFire.database.list('/Locations/' + countryName + '/states/' + stateName + '/cities/' + cityName + '/beaches/');

    return Promise.resolve(beaches);
  }
}
