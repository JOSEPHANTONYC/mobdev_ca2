import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceshipsDetailsPage } from './spaceships-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceshipsDetailsPageRoutingModule {}
