import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  max = 5;
  rate = 2;
  isReadonly = false;
}
