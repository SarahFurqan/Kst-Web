import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form-page',
  templateUrl: './contact-us-form-page.component.html',
  styleUrls: ['./contact-us-form-page.component.css']
})
export class ContactUsFormPageComponent {
  exampleForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.exampleForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(8)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    var form = new FormData();
    console.log(this.exampleForm.value);
    form.append("first_name", "firstname");
    form.append("last_name", "lastname");
    form.append("email", "email");
    form.append("phone", "023809238");
    form.append("subject", "subject");
    form.append("message", "message");
    // add code to submit form data here

    var settings = {
      "url": "{{localhost}}/api/contact",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
  }
  
  
  
}
