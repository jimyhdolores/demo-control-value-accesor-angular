import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-rating-name',
	templateUrl: './rating-name.component.html',
	styleUrls: ['./rating-name.component.scss'],
	imports: [CommonModule, ReactiveFormsModule]
})
export class RatingNameComponent {
	constructor(private _formBuilder: FormBuilder) {}

	formGroup = this._formBuilder.group({
		name: ['', Validators.required]
	});
}
