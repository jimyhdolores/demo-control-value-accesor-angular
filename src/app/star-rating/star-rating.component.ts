import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: StarRatingComponent,
			multi: true
		}
	]
})
export class StarRatingComponent implements OnInit {
	private _rating: number = 3;
	ratingArr: number[] = [];

	ngOnInit(): void {
		for (let index = 0; index < 5; index++) {
			this.ratingArr.push(index);
		}
	}

	onClick(rating: number): void {
		console.log(rating);
		this._rating = rating;
	}

	showIcon(index: number): string {
		return this._rating >= index + 1 ? 'star' : 'star_border';
	}
}
