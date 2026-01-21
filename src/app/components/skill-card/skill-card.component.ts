import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {

 @Input() title!: string;
  @Input() proficiency!: number; // 1–5 stars
  @Input() items!: string[];
  @Input() description!: string[];
  
  getStars(count: number): number[] {
  return Array.from({ length: count });
}

}
