import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactamePage } from './contactame.page';

const routes: Routes = [
  {
    path: '',
    component: ContactamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactamePageRoutingModule {}
