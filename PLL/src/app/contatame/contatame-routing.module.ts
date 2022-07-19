import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatamePage } from './contatame.page';

const routes: Routes = [
  {
    path: '',
    component: ContatamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatamePageRoutingModule {}
