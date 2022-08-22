import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OnlyNumberDirective } from './only-number.directive';

@Component({
  standalone: true,
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  imports: [CommonModule],
  providers: [OnlyNumberDirective],
})
export class InputNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
