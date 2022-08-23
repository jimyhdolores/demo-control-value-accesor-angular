import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { OnlyTextDirective } from './directives/only-text.directive';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, InputNumberComponent, InputTextComponent, OnlyNumberDirective, OnlyTextDirective, StarRatingComponent],
	imports: [BrowserModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
