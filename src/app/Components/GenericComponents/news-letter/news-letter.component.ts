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

  constructor(private http: HttpClient) {}

  subscribe() {
    const apiUrl = environment.baseUrl+"subscribe";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    console.log(this.email)
    this.email = ''; 
    this.http.post(apiUrl, { email: this.email }).subscribe(
      (response) => {
        console.log('Subscribed successfully');
        this.email = '';
      },
      (error) => {
        console.log('Subscription failed');
      }
    );
  }
}
