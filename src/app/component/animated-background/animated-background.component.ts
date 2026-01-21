import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  imports: [CommonModule],
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.css'
})
export class AnimatedBackgroundComponent implements AfterViewInit {
  @Input() animationType: 'gradient' | 'particles' | 'grid' | 'waves' = 'gradient';
  @Input() opacity: number = 0.7;
    // @Input() particleColors: string[] = ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.3)'];
    @Input() particleColors: string[] = [
    'rgba(139, 92, 246, 0.8)',    // Violet
    'rgba(236, 72, 153, 0.8)',    // Pink
    'rgba(217, 70, 239, 0.8)',    // Fuchsia
    'rgba(192, 132, 252, 0.7)',   // Light Purple
    'rgba(240, 171, 252, 0.7)'    // Light Pink
  ];
    @Input() particleSize: { min: number, max: number } = { min: 2, max: 8 }; // Smaller sizes
  @Input() speed: number = 1; // Speed multiplier (1 = normal, 2 = 2x faster, etc.)
 @Input() gradientColors: string[] = ['#8B5CF6', '#EC4899', '#D946EF', '#F0ABFC', '#C084FC']; // Purple pink colors
  particles: any[] = [];

  ngAfterViewInit() {
    if (this.animationType === 'particles') {
      this.generateParticles();
    }
  }

   generateParticles() {
    this.particles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      size: Math.random() * (this.particleSize.max - this.particleSize.min) + this.particleSize.min,
      left: Math.random() * 100,
      animationDelay: Math.random() * 10 / this.speed,
      animationDuration: (Math.random() * 4 + 3) / this.speed,
      color: this.particleColors[Math.floor(Math.random() * this.particleColors.length)]
    }));
  }

  getParticleStyle(particle: any) {
    return {
      'width.px': particle.size,
      'height.px': particle.size,
      'left.%': particle.left,
      'animation-delay.s': particle.animationDelay,
      'animation-duration.s': particle.animationDuration,
      'background': particle.color,
      'box-shadow': `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color.replace('0.8', '0.3')}`
    };
  }
}