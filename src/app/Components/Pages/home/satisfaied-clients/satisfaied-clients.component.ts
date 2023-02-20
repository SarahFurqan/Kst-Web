import { Component } from '@angular/core';

@Component({
  selector: 'app-satisfaied-clients',
  templateUrl: './satisfaied-clients.component.html',
  styleUrls: ['./satisfaied-clients.component.css']
})
export class SatisfaiedClientsComponent {
  max = 5;
  rate = 2;
  isReadonly = false;
}
