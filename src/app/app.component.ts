import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	formGroup = new FormGroup({
		title: new FormControl('El señor de los anillos', Validators.required),
		rating: new FormControl(4, Validators.min(3)),
		ratingName: new FormControl({ name: 'Juan', rating: 5 })
	});

	clickSave(): void {
		console.log('valid--> ', this.formGroup.valid);
		console.log('valid--> ', this.formGroup.controls.ratingName.errors);
	}
}
