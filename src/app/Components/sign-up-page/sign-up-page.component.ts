import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  formgroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  })
  constructor(){
    this.formgroup.valueChanges.subscribe((val)=> console.log(this.formgroup))
  }
  // clickHandler(){
  //  console.log(this.formgroup.value);
  // }
  

}
