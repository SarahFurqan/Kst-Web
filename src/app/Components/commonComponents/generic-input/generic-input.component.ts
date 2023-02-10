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

 
  onChange(event : any){

  }
  onTouched(){
    
  }
  writeValue(obj: any): void {
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }
  errorMessages: Record<string, string>= {
    required: "the feild is required",
    email: "the Email is invalid",
  }

}


