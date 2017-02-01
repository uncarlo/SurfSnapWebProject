import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {PictureService} from '../picture-service/picture.service';
import {FirebaseService} from '../firebase-service/firebase.service';
import {Picture} from "../dtos/picture";

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent implements OnInit {

  private picture: Picture;

  constructor(private pictureService: FirebaseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    /*
     * If the user re-navigates to this component while a getHero request is
     * still inflight, switchMap cancels that old request before calling
     * HeroService.getHero again. More info: https://angular.io/docs/ts/latest/guide/router.html#!#activated-route
     */
    this.route.params
      .switchMap((params: Params) =>
        this.pictureService.getPicture(params['country'], params['state'], params['city'], params['beach'], params['picture']))
      .subscribe(picture => this.picture = picture);
  }
}
