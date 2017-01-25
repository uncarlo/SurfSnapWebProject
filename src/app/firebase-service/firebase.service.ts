import {Injectable} from '@angular/core';

import {Picture}    from '../picture';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {

  constructor(private angularFire: AngularFire) {
  }

  getPictures(): Promise<Picture[]> {
    var pictures = this.angularFire.database.list('/Locations/US/California/San Diego/Tourmaline Beach');

    return Promise.resolve(pictures);
  }

  getPicture(uid): Promise<Picture> {
    var picture =  this.angularFire.database.object('/Locations/US/California/San Diego/Tourmaline Beach/' + uid);

    return Promise.resolve(picture);
  }
}
