import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent {
  email!: string;
  message!: string;

  constructor(private http: HttpClient) {}

  subscribe() {
    const apiUrl = environment.baseUrl+"subscribe";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    console.log(this.email)
    this.http.post(apiUrl, { email: this.email }).subscribe(
      (response) => {
        this.message='Subscribed successfully';
        this.email = '';
      },
      (error) => {
        this.message='Subscription failed';
      }
    );
  }
}
