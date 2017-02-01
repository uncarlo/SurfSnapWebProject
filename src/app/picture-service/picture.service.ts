import { Injectable } from '@angular/core';

import { Picture }    from '../dtos/picture';
import { PICTURES }   from '../mock-pictures/mock-pictures'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PictureService {

  constructor() { }

  getPictures(): Promise<Picture[]> {
    return Promise.resolve(Observable.of(PICTURES));
  }

  getPicture(uid): Promise<Picture> {
    return Promise.resolve(Observable.of(PICTURES.find(picture => picture.uid === +uid)));
  }
}
