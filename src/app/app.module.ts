import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InputNumberComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
