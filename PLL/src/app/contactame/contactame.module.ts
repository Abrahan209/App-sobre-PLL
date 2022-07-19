import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactamePageRoutingModule } from './contactame-routing.module';

import { ContactamePage } from './contactame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactamePageRoutingModule
  ],
  declarations: [ContactamePage]
})
export class ContactamePageModule {}
