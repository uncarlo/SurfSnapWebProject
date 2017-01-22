import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureViewComponent }  from '../picture-view/picture-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/pictureView', pathMatch: 'full' },
  { path: 'pictureView', component: PictureViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
