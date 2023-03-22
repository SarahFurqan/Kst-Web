import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { first } from 'rxjs';

@Component({
  selector: 'app-contact-us-form-page',
  templateUrl: './contact-us-form-page.component.html',
  styleUrls: ['./contact-us-form-page.component.css']
})
export class ContactUsFormPageComponent {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
  
    const formData = new FormData();
    formData.append("first_name", this.form.value.firstname);
    formData.append("last_name", this.form.value.lastname);
    formData.append("email", this.form.value.email);
    formData.append("subject", this.form.value.subject);  
    formData.append("message", this.form.value.message);
    this.form.reset();
    const apiUrl = environment.baseUrl+"contact";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    const options = { headers, processData: false, mimeType: "multipart/form-data", contentType: false };
    this.http.post(apiUrl, formData, options).subscribe(response => {
      console.log(response);
      this.form.reset();
    });
  }
}
