import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    {
      title: 'Core Frontend Skills',
      proficiency: 4,
      items: [
        'Angular (v14+)',
        'TypeScript',
        'RxJS',
        'HTML5',
        'CSS3',
        'Signals',
        'Standalone Components',
        'Responsive UI',
        'Tailwind CSS',
        'Angular Material',
        'Bootstrap',
      ],
      description: [
        'Built reusable, scalable UI components that reduced code duplication by 30%',
        'Improved runtime performance using Signals & optimized change detection',
      ],
    },
    {
      title: 'Advanced Angular Expertise',
      proficiency: 3,
      items: [
        'NgRx',
        'Change Detection',
        'Lazy Loading',
        'Route Animations',
        ' Reactive Forms',
        ' Custom Pipes',
        'Custom Directives',
        'Performance Optimization',
      ],
      description: [
        'Designed feature-module structures enabling 40% faster load times',
        'Implemented NgRx patterns that minimized state-related bugs in enterprise apps',
      ],
    },
    {
      title: 'API & Backend Integration',
      proficiency: 4,
      items: [
        'REST APIs',
        'HTTP Client',
        'JSON',
        'GraphQL',
        'Error Handling',
        'Interceptors',
      ],
      description: [
        'Built robust API layers with caching, retry & interceptor-based authentication',
        'Reduced API failure rate by 25% with smart error-handling strategies',
      ],
    },
    {
      title: 'Developer Tools',
      proficiency: 3,
      items: [
        'VS Code',
        'Chrome Dev Tools',
        'Angular Dev Tools',
        'Figma',
        'Canva',
      ],
      description: [
        'Streamlined debugging workflows using Angular DevTools',
        'Designed UI mockups and prototypes to accelerate development',
      ],
    },
    {
      title: 'Authentication & Security',
      proficiency: 3,
      items: [
        'JWT',
        'Auth0',
        'Route Protection',
        'Auth Guards',
        'Role-Based Access Control (RBAC)',
      ],
      description: [
        'Delivered secure role-based modules for multi-user systems',
        'Implemented token refresh workflows improving session security',
      ],
    },
    {
      title: 'Testing & Quality',
      proficiency: 3,
      items: ['Jasmine', 'Karma', 'Angular Testbed', 'Cypress'],
      description: [
        'Increased code reliability with 60–70% unit test coverage',
        'Automated end-to-end testing pipelines for UI stability',
      ],
    },
    {
      title: 'Version Control & CI/CD',
      proficiency: 3,
      items: ['Git', 'GitHub', 'GitHub Actions', 'Docker'],
      description: [
        'Automated build & deploy pipelines reducing manual effort by 80%',
        'Containerized Angular apps for consistent environments',
      ],
    },
    {
      title: 'Databases',
      proficiency: 3,
      items: ['MySQL (CRUD, Indexing)', 'CMongoDB'],
      description: [
        'Designed optimized queries improving API response times',
        'Implemented indexed collections for large dataset filtering',
      ],
    },
    {
      title: 'Agile & Collaboration',
      proficiency: 3,
      items: ['Agile', 'JIRA', 'Team Collaboration', 'Problem Solving'],
      description: [
        'Delivered features consistently in sprint cycles',
        'Communicated effectively across teams to resolve blockers quickly',
      ],
    },
    {
      title: 'Architecture & Patterns',
      proficiency: 3,
      items: [
        'Component Architecture',
        'Smart vs Dumb Components',
        'Modular Architecture',
        'SOLID Principles',
        ' Design Pattern',
      ],
      description: [
        'Converted monolithic screens into modular structures improving maintainability',
        'Ensured cleaner, scalable codebase using SOLID principles',
      ],
    },
    {
      title: 'Performance Optimization',
      proficiency: 3,
      items: [
        'OnPush Strategy',
        'Memoization',
        'Debouncing / Throttling',
        'Preloading Strategies',
        'Design Pattern',
        'Bundle Optimization',
      ],
      description: [
        'Improved overall app performance by 25–50% with targeted optimizations',
        'Reduced initial load time with route-based preloading strategies',
      ],
    },

    {
      title: 'Deployment',
      proficiency: 3,
      items: ['Firebase', 'Netlify', 'Vercel'],
      description: [
        'Deployed production-ready apps with optimized bundles & caching',
        'Achieved fast Lighthouse performance scores (90+)',
      ],
    },
    {
      title: 'Soft Skills',
      proficiency: 4,
      items: [
        'Communication',
        'Team Collaboration',
        'Client Requirement Understanding',
        'Problem-solving',
        'Fast Learner',
      ],
      description: [
        'Communicated clearly with teams to solve problems quickly and efficiently',
        'Managed time and tasks independently while staying organized and focused',
      ],
    },
  ];


   // Load 3 more cards
   showCount = 3; // show 3 cards first
    loadMore() {
    this.showCount = Math.min(this.showCount + 3, this.skills.length);
  }

  // Show 3 fewer cards

 showLess() {
  this.showCount = Math.max(this.showCount - 3, 3);
  // No scrolling here, button stays in place
}

  // Check if all cards are visible
  get isAllShown(): boolean {
    return this.showCount >= this.skills.length;
  }

  // Check if "Show Less" button should be visible
  get canShowLess(): boolean {
    return this.showCount > 3;
  }
}