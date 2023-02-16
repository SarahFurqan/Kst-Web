import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  @Output() login: EventEmitter<any> = new EventEmitter();
  @Input()
  title!: string;
  loginForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSave(){
  this.login.emit(this.loginForm.value);
  }

  
}