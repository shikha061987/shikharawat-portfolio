import { Component } from '@angular/core';
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-about',
  imports: [EducationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
