import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureViewComponent }  from '../picture-view/picture-view.component';
import { PictureDetailComponent } from '../picture-detail/picture-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'pictureView', pathMatch: 'full' },
  { path: 'pictureView', component: PictureViewComponent },
  { path: 'pictureView/:country/:state/:city/:beach', component: PictureViewComponent },
  { path: 'detail/:country/:state/:city/:beach/:picture', component: PictureDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
