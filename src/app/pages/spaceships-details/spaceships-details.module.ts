import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceshipsDetailsPageRoutingModule } from './spaceships-details-routing.module';

import { SpaceshipsDetailsPage } from './spaceships-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceshipsDetailsPageRoutingModule
  ],
  declarations: [SpaceshipsDetailsPage]
})
export class SpaceshipsDetailsPageModule {}
