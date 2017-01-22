import { Injectable } from '@angular/core';

import { Picture }    from '../picture';
import { PICTURES }   from '../mock-pictures/mock-pictures'

@Injectable()
export class PictureService {

  constructor() { }

  getPictures(): Promise<Picture[]> {
    return Promise.resolve(PICTURES);
  }

  getPicture(id): Promise<Picture> {
    return this.getPictures()
      .then(pictures => pictures.find(picture => picture.id === id));
  }
}
