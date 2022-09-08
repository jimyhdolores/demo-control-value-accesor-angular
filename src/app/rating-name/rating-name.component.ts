import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import {
	AbstractControl,
	ControlValueAccessor,
	FormBuilder,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule,
	ValidationErrors,
	Validator,
	Validators
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
	standalone: true,
	selector: 'app-rating-name',
	templateUrl: './rating-name.component.html',
	styleUrls: ['./rating-name.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, StarRatingComponent],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RatingNameComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => RatingNameComponent),
			multi: true
		}
	]
})
export class RatingNameComponent implements ControlValueAccessor, Validator {
	constructor(private _formBuilder: FormBuilder) {
		this.formGroup.valueChanges.pipe(debounceTime(100)).subscribe(() => {
			this._onChanged(this.formGroup.value);
			this._onTouch(this.formGroup.value);
		});
	}

	private _onChanged: Function = (_value: { name: string; rating: number }) => {};
	private _onTouch: Function = (_value: { name: string; rating: number }) => {};

	formGroup = this._formBuilder.group({
		name: ['', Validators.required],
		rating: [3, Validators.min(4)]
	});

	writeValue(obj: { name: string; rating: number }): void {
		if (obj) {
			this.formGroup.setValue(obj);
		}
	}

	registerOnChange(fn: Function): void {
		this._onChanged = fn;
	}
	registerOnTouched(fn: Function): void {
		this._onTouch = fn;
	}

	validate(_control: AbstractControl): ValidationErrors | null {
		return this.formGroup.valid ? null : { invalidRatingName: true };
	}
}
