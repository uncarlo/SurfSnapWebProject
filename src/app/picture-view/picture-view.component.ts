import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {PictureService} from "../picture-service/picture.service";
import {FirebaseService} from "../firebase-service/firebase.service";
import {Picture} from "../dtos/picture";
import {Country, State, City, Beach} from "../dtos/location";

@Component({
  selector: 'app-picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.css']
})

export class PictureViewComponent implements OnInit {

  private country: Country;
  private state: State;
  private city: City;
  private beach: Beach;
  private pictures: Picture[];

  constructor(private pictureService: FirebaseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // :country/:state/:city/:beach
    this.route.params
      .switchMap((params: Params) => {
          this.country = params['country'];
          this.state = params['state'];
          this.city = params['city'];
          this.beach = params['beach'];
          return this.pictureService.getPictures(this.country, this.state, this.city, this.beach);
        }
      ).subscribe(pictures => this.pictures = pictures);
  }
}
