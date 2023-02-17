import { Component } from '@angular/core';
import {faLinkedin, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  myLinkedinIcon = faLinkedin;
  facebook = faFacebook;
  insta = faInstagram;
}
