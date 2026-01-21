import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

 educations = [
    {
      date:' 2007-2010',
      degreeName:' Master of Computer Applications (MCA)',
      university:' Gautam Buddha Technical University',
      active: false

    },
     {
      date:' 2004-2007',
      degreeName:'Bachelor of Computer Science (BSC)',
      university:'Chaudhary Charan Singh University',
      active: false

    }
  ]

}
