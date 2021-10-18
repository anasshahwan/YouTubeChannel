import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizeFirstLetterPipe } from './Pipes/capitalize-first-letter.pipe';
import { ShowLastFourDigitsPipe } from './Pipes/show-last-four-digits.pipe';
import { PhoneFormatPipe } from './Pipes/phone-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstLetterPipe,
    ShowLastFourDigitsPipe,
    PhoneFormatPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
