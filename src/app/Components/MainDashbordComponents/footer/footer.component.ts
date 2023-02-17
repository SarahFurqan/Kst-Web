import { Component } from '@angular/core';
import {faLinkedin, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faHouse,faInfoCircle,faBriefcase,faNewspaper,faPenRuler,faPhone,faMagnifyingGlass,faPhoneVolume,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  myLinkedinIcon = faLinkedin;
  facebook = faFacebook;
  insta = faInstagram;
  home = faHouse;
  aboutus = faInfoCircle;
  services = faBriefcase
  blognews = faNewspaper;
  portfolio = faPenRuler;
  contactus = faPhone;
  jobs = faMagnifyingGlass;
  number = faPhoneVolume;
  env = faEnvelope;
  locate = faLocationDot;
}
