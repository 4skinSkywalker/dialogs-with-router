import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogBaseComponent } from './dialogs/dialog-base/dialog-base.component';
import { DialogAreYouSureComponent } from './dialogs/dialog-are-you-sure/dialog-are-you-sure.component';
import { DialogLongTextComponent } from './dialogs/dialog-long-text/dialog-long-text.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBaseComponent,
    DialogAreYouSureComponent,
    DialogLongTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
