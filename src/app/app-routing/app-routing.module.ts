import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureViewComponent }  from '../picture-view/picture-view.component';
import { PictureDetailComponent } from '../picture-detail/picture-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/pictureView', pathMatch: 'full' },
  { path: 'pictureView', component: PictureViewComponent },
  { path: 'detail/:id', component: PictureDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
