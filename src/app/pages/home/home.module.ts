import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { SharedModule } from '@app/shared/shared.module';
import {NxRoutingModule} from '@pages/home/home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
      NxRoutingModule
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
