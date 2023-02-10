import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  formgroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
  })
  target: any;
  clickHandler(value: string){
    this.target.value=this.formgroup.value.firstName,
    this.target.value=this.formgroup.value.lastName,
    this.target.value=this.formgroup.value.email;
  }
  

}
