import {Component, OnInit} from '@angular/core';

import {PictureService} from "../picture-service/picture.service";
import {FirebaseService} from "../firebase-service/firebase.service";
import {Picture} from "../picture";

@Component({
  selector: 'app-picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.css']
})

export class PictureViewComponent implements OnInit {

  private pictures: Picture[];

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
    this.pictureService.getPictures().then(pictures => { this.pictures = pictures;});
  }
}
