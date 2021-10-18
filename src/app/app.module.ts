import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizeFirstLetterPipe } from './Pipes/capitalize-first-letter.pipe';
@NgModule({
  declarations: [AppComponent, CapitalizeFirstLetterPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
