import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogAreYouSureComponent } from './dialogs/dialog-are-you-sure/dialog-are-you-sure.component';
import { DialogLongTextComponent } from './dialogs/dialog-long-text/dialog-long-text.component';

const routes: Routes = [
  {
    path: 'dialog-are-you-sure',
    component: DialogAreYouSureComponent,
    outlet: 'auxiliary'
  },
  {
    path: 'dialog-long-text',
    component: DialogLongTextComponent,
    outlet: 'auxiliary'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
