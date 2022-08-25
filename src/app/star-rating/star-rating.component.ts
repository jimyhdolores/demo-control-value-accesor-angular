import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
	imports: [CommonModule]
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
		this._rating = rating;
	}

	showIcon(index: number): string {
		return this._rating >= index + 1 ? 'star' : 'star_border';
	}
}
