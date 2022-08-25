import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private _formBuilder: FormBuilder) {}
	formGroup = this._formBuilder.group({
		input: ['', Validators.required]
	});

	clickSave(): void {
		console.log(this.formGroup.valid);
	}
}
