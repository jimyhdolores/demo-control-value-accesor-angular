import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
	imports: [CommonModule],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => StarRatingComponent),
			multi: true
		}
	]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
	private _rating: number = 3;
	ratingArr: number[] = [];

	private _onChanged: Function = (_value: number) => {};
	private _onTouch: Function = (_value: number) => {};

	ngOnInit(): void {
		for (let index = 0; index < 5; index++) {
			this.ratingArr.push(index);
		}
	}

	onClick(rating: number): void {
		this._rating = rating;
		this._onChanged(this._rating);
		this._onTouch(this._rating);
	}

	showIcon(index: number): string {
		return this._rating >= index + 1 ? 'star' : 'star_border';
	}
	//#region ControlValueAccessor

	writeValue(value: number): void {
		if (value) {
			this._rating = value;
		}
	}

	registerOnChange(fn: Function): void {
		this._onChanged = fn;
	}

	registerOnTouched(fn: Function): void {
		this._onTouch = fn;
	}
	//#endregion
}
