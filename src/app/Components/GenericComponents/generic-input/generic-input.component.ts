import { Component, ElementRef, Input, Self, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgControl, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent {
  

  disabled!: boolean;

  @Input() inputId = '';
  @Input() isRequired: boolean = false;
  @Input() pattern = '';
  @Input() placeholder = '';
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() type = 'text';

  errorMessages: Record<string, string>= {
    required: "the feild is required",
    email: "the Email is invalid",
  }

}


