import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item.component";

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

      showDetails = false;
      activeSection: number | null = null;
      toggleDetails(index: number) {
      this.activeSection = this.activeSection === index ? null : index;
    }

  experienceList = [
  {
    date: 'August 2024 – Present',
    title: 'Frontend Angular Developer (Self-Employed)',
    location: 'Georgia, USA',
    summary: 'Developing modern, scalable, and high-performance Angular applications with a strong focus on UI/UX, performance optimization, secure authentication, and reusable architecture. Delivering end-to-end solutions from design to deployment using Agile methodologies.',
    keyResponsibilities: [
      'Developed full-featured Angular applications using Angular CLI, TypeScript, RxJS, Bootstrap, Tailwind, Angular Material, and REST APIs.',
      'Implemented secure JWT-based authentication, role-based authorization, and protected routes.',
      'Optimized performance using lazy loading, preloading, route-level code-splitting, and caching strategies.',
      'Built responsive, mobile-friendly interfaces with reusable UI components and shared modules.',
      'Created mock API environments using JSON Server; wrote unit and integration tests with Jasmine & Karma.',
      'Collaborated with designers, backend developers, and QA using Git, Bitbucket, Jira, and Agile Scrum practices.',
      'Ensured consistent coding standards with code reviews and industry best practices.'
    
    ],
     keyAchievements: [
      
      'Improved initial application load time by 35% through advanced lazy loading and optimization.',
      'Reduced duplicate UI code by 20% by creating a reusable Angular component library.',
      'Enhanced API response efficiency by 40% using optimized HTTP Interceptors, caching, and error handling.',
      'Increased UI consistency and reduced user errors by implementing form validation and reusable UI patterns.',
      'Successfully deployed updates through Bitbucket Pipelines with CI/CD automation.'
    ],
    challenges: [
      { challenge: "Slow load time affecting user experience", solution: "Added route-level lazy loading and code-splitting → load time reduced by 35%." },
      { challenge: "Repeated UI code across modules.", solution: "Built shared component library → improved scalability and reduced duplication." },
      { challenge: "API latency during heavy traffic.", solution: "Implemented caching + interceptor optimization → response time improved by 40%." }

    ],
      
  },
  
  {
    date: 'October 2013 – December 2014',
    title: 'Software Engineer - Liquid Hub India Pvt. Ltd.',
    location: 'Mumbai, India',
    summary: 'Delivered scalable Angular interfaces, built reusable UI components, and integrated microservices to improve performance and consistency. Strengthened Agile delivery with optimized workflows, clean code, and seamless collaboration across teams.',
    keyResponsibilities: [
      'Developed and deployed custom Angular-based UI components from design phase to production.',
      'Built reusable Angular modules, components, and shared libraries for cross-application usage.',
      'Implemented application state communication using Observables, BehaviorSubjects, @Input, and @Output.',
      'Added responsive and accessible UI styling.',
      'Collaborated closely with cross-functional teams to gather requirements, resolve issues, and ensure smooth delivery.',
      'Used Bitbucket/Git for version control for CI/CD deployments.'
    ],
    keyAchievements: [
      
      'Successfully delivered multiple production-ready UI modules that improved application usability and reduced development time for future releases.',
      'Built reusable Angular components that were later adopted across different UI applications, increasing consistency and reducing code duplication.',
      'Enhanced frontend performance by optimizing API integrations and reducing unnecessary DOM rendering.',
      'Improved user experience by implementing responsive layouts compatible with multiple devices and screen sizes.',
      'Recognized by team for fast issue resolution and effective communication across design, backend, and QA teams.'
    ],
      challenges: [
      { challenge: "Slow DOM rendering due to repeated API calls and large component trees.", solution: "Optimized Observables, added caching with BehaviorSubject, and used Angular structural directives efficiently." },
      { challenge: "Frequent requirement changes in Agile sprints.", solution: "Maintained flexible modular architecture and collaborated closely with product owners to adapt quickly." },
      { challenge: "Integrating new UI features with unstable backend microservices.", solution: "Used error handling, fallback UI states, and API mocks to ensure smooth development and testing." }

    ],
  },


  {
    date: 'August 2011 – August 2013',
    title: 'Software Engineer - Classic Informatics Pvt. Ltd.',
    location: 'Delhi, India',
    summary: 'Developed and maintained iOS applications in Objective-C, optimizing performance, memory, and UI responsiveness. Delivered production-ready apps to the App Store, conducted testing and debugging, and collaborated across the full software development lifecycle to ensure high-quality mobile solutions.',
    keyResponsibilities: [
      'Developed and maintained iOS applications using Objective-C, Xcode, UIKit, and Core Data.',
      'Designed app architecture, implemented features, and ensured smooth UI/UX performance.',
      'Performed unit testing, debugging, and delivered production-ready builds to the App Store.',
      'Optimized memory usage, app load time, and overall responsiveness.',
      'Worked across the full development lifecycle including analysis, design, coding, and testing.'
    ],
       keyAchievements: [
      
      'Successfully delivered multiple iOS applications to the App Store with high stability and positive user feedback.',
      'Improved app performance through optimized memory management and efficient data handling using Core Data.',
      'Reduced crash rates by implementing strong debugging and testing practices.',
      'Enhanced user experience with responsive, polished UI built using UIKit components.',
      'Recognized by the team for consistently delivering features on time and improving code quality.'
    ],
     challenges: [
      { challenge: "Performance issues due to high memory usage on older iOS devices.", solution: "Implemented efficient memory management, lazy loading, and optimized Core Data queries." },
      { challenge: "Frequent App Store review rejections.", solution: "Strengthened QA, fixed compliance issues early, and aligned features with Apple’s guidelines." },
      { challenge: "Limited documentation and evolving project requirements.", solution: "Conducted thorough analysis, improved documentation, and collaborated closely with stakeholders for clarity." }

    ],
  },


  {
    date: 'March 2010 – August 2011',
    title: 'Software Developer - 4C Plus Internet Co. Ltd.',
    location: 'Delhi, India',
    summary:'Developed responsive, interactive websites ensuring cross-browser compatibility and clean, maintainable code. Collaborated with designers and senior developers to deliver optimized, user-friendly web solutions.',
    keyResponsibilities: [
      'Developed responsive and interactive websites using HTML5, CSS, and JavaScript.',
      'Followed coding standards and best practices to ensure clean, scalable, and maintainable code.',
      'Collaborated with senior developers and UI/UX designers to implement layouts and interactive features.',
      'Performed manual and basic automated testing to ensure cross-browser and cross-device functionality.',
      'Debugged issues and optimized front-end performance for better user experience.',
    ],
       keyAchievements: [
      
      'Improved site performance and reduced load times by optimizing HTML, CSS, and JavaScript.',
      'Gained experience in implementing modern front-end development practices and standards.',
      'Contributed to a smoother development workflow by effectively coordinating with designers and senior developers.',
      'Successfully delivered multiple responsive websites.',
    ],
      challenges: [
      { challenge: "Ensuring consistent performance and appearance across different browsers.", solution: "Implemented cross-browser testing and applied CSS/JS fallbacks for compatibility." },
      { challenge: "Translating complex UI designs into functional web pages.", solution: "Collaborated closely with designers and iterated quickly to match design specifications." },
      { challenge: "Limited experience in front-end best practices as a junior developer.", solution: "Followed mentorship guidance and applied coding standards to improve code quality." }

    ],
  }
];





}
