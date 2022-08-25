import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, StarRatingComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
