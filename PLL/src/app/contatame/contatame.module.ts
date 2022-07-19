import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatamePageRoutingModule } from './contatame-routing.module';

import { ContatamePage } from './contatame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatamePageRoutingModule
  ],
  declarations: [ContatamePage]
})
export class ContatamePageModule {}
