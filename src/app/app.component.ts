import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	formGroup = new FormGroup({
		title: new FormControl('', Validators.required)
	});

	clickSave(): void {
		console.log(this.formGroup.valid);
	}
}
