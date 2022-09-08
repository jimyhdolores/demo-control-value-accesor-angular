import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RatingNameComponent } from './rating-name/rating-name.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, StarRatingComponent, RatingNameComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
