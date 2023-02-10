import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  signUp = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
  clickHandler(){
    
  }
}
