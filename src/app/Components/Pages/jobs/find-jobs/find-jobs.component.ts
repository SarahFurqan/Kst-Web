import { Component } from '@angular/core';
import { faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.css']
})
export class FindJobsComponent {
  jobs = faMagnifyingGlass;
  locate = faLocationDot;
}
