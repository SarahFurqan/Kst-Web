import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent {
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['',Validators.required],
    
  });
  formgroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })
  constructor(private fb: FormBuilder) { }
  onSubmit() {
    console.warn(this.profileForm.value);
  }

}
