import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-experience-item',
  imports: [CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss'
})
export class ExperienceItemComponent {
   @Input() experience: any;
  @Input() index!: number;
  @Input() activeSection!: number | null;

 @Output() toggle = new EventEmitter<number>();

onToggleClick() {
  this.toggle.emit(this.index); 
}
get sections() {
  return [
    { 
      title: 'Key Responsibilities',
      type: 'responsibilities',
      items: this.experience.keyResponsibilities || [] 
    },
    { 
      title: 'Key Achievements',
      type: 'achievements',
      items: this.experience.keyAchievements || [] 
    },
    { 
      title: 'Challenges Solved',
      type: 'challenges',
      items: this.experience.challenges || [] 
    }
  ];
}


}