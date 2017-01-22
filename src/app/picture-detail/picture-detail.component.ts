import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PictureService } from '../picture-service/picture.service';
import { Picture } from "../picture";

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent implements OnInit {

  private picture : Picture;

  constructor(
    private pictureService : PictureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    /*
     * If the user re-navigates to this component while a getHero request is
     * still inflight, switchMap cancels that old request before calling
     * HeroService.getHero again. More info: https://angular.io/docs/ts/latest/guide/router.html#!#activated-route
     */
    // [CT]: +params['id'] converts the param into a number ([+] operator in JS).
    this.route.params
      .switchMap((params: Params) => this.pictureService.getPicture(+params['id']))
      .subscribe(picture => this.picture = picture);
  }
}
