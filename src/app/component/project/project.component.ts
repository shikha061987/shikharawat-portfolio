import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CertificatesComponent } from '../certificates/certificates.component';

interface Project {
  viewProjlink: string;
  githublink: string;
  projectNme: string;
  projectImages: string[];
  projectSkills: string[];
  shortfeatures: string[];
  longfeatures: string[];
}

@Component({
  selector: 'app-project',

  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  imports: [CommonModule, CertificatesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectComponent {
  activeIndex: number | null = null;

  projects: Project[] = [
    {
      viewProjlink: 'https://stockwise-inventory.netlify.app/',
      githublink: 'https://github.com/shikha061987?tab=repositories',
      projectNme: 'Inventory Management System',
      projectImages: [
        './project/inventory-mobile1.jpeg',
        './project/inventory-mobile2.jpeg',
        './project/inventory.png',
      ],
      projectSkills: [
        'Angular',
        'Tailwind',
        'NgRx',
        'RxJS',
        'PrimeNg',
        'TypeScript',
        'Jasmine',
        'Karma',
        'Git / GitHub',
        'Netlify deploy',
      ],
      shortfeatures: [
        'Role-based access: Admin, Manager, Customer Dashboard',
        'Use NgRx for managing app state efficiently.',
      ],
      longfeatures: [
        'Search by category, and pagination for products',
        'Lazy loading modules for performance.',
        'Overview of total products, stock status, orders in progress.',
      ],
    },

    {
      viewProjlink: 'https://angular-movies-app-25f82.web.app/home',
      githublink: 'https://github.com/shikha061987?tab=repositories',
      projectNme: 'Movie Explorer Project',

      projectImages: [
        './project/MovieApp-mobile1.jpg',
        './project/MovieApp-mobile2.jpg',
        './project/MovieApp1.png',
      ],

      projectSkills: [
        'Angular',
        'HTML5',
        'CSS3',
        'BootStrap',
        'Auth0',
        'REST APIs',
        'TypeScript',
        'JSON Server',
        'Jasmine',
        'Karma',
        'Git / GitHub',
        'Firebase deploy',
      ],
      shortfeatures: [
        'Auth0 implement for authentication.',
        'Browse a catalog of movies with posters, titles, and ratings.',
      ],
      longfeatures: [
        'Browse a catalog of movies with posters, titles, and ratings.',
        'Filter and sort movies by genre, rating, release date, or popularity.',
        'Clean Angular component structure with routing.',
        'Responsive design.',
      ],
    },

    {
      viewProjlink: 'https://employees-manage-portal.netlify.app/',
      githublink: 'https://github.com/shikha061987?tab=repositories',
      projectNme: 'Employees Management System',
      projectImages: [
        './project/emp-management.-Mobile1.jpeg',

        './project/emp-management.-Mobile2.jpeg',

        './project/emp-management.png',
      ],
      projectSkills: [
        'Angular',
        'HTML5',
        'CSS3',
        'Angular Material',
        'JSON Server',
        'TypeScript',
        'Jasmine',
        'Karma',
        'Git / GitHub',
        'Netlify deploy',
      ],
      shortfeatures: [
        'Display all employees with basic details like name, email, phone, address.',
        'JSON Server for storing and retrieving employee data',
      ],
      longfeatures: [
        'Update existing employee details.',
        'Remove employees when needed.',
        'Add, edit, and delete employee records.',
        'Clean and responsive UI for an intuitive user experience.',
        'Modular architecture.',
      ],
    },

    {
      viewProjlink: 'https://shopping-ecommerceapp.web.app/products',
      githublink: 'https://github.com/shikha061987?tab=repositories',
      projectNme: 'Shop E-Commerce Application',
      projectImages: [
        './project/shop-mobile1.jpg',
        './project/shop-mobile2.jpg',
        './project/ShopNest.png',
      ],
      projectSkills: [
        'Angular',
        'HTML5',
        'CSS3',
        'BootStrap',
        'Angular Material',
        'REST APIs',
        'TypeScript',
        'Local Storage API',
        'Jasmine',
        'Karma',
        'Git / GitHub',
        'Firebase deploy',
      ],
      shortfeatures: [
        'Product listing, filtering & searching.',
        'Product details page.',
      ],
      longfeatures: [
        'Responsive UI using Tailwind + Material.',
        'Add to cart and remove from cart',
        'Firebase integration.',
        'Modular architecture.',
      ],
    },

    {
      viewProjlink: 'https://chart-sample-d8524.web.app/',
      githublink: 'https://github.com/shikha061987?tab=repositories',
      projectNme: 'Live Data Chart Dashboard',
      projectImages: [
        './project/chart-Mobile1.jpg',
        './project/chart-Mobile2.jpg',
        './project/Live Chart.png',
      ],
      projectSkills: [
        'Angular',
        'HTML5',
        'CSS3',
        'RxJS',
        'Chart.js',
        'TypeScript',
        'Jasmine',
        'Karma',
        'Git / GitHub',
        'Firebase deploy',
      ],
      shortfeatures: [
        'Multiple chart types: line, bar, pie, area, scatter.',
        'Modular architecture.',
      ],
      longfeatures: [
        'Responsive UI using Tailwind + Material.',
        'Firebase integration.',
        'Modular architecture.',
      ],
    },
  ];

  toggle(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
  }

  getProjectFeatures(item: Project, index: number) {
    return this.activeIndex === index
      ? [...item.shortfeatures, ...item.longfeatures]
      : item.shortfeatures;
  }

  showCount = 3; // show 3 cards first
  loadMore() {
    this.showCount = Math.min(this.showCount + 3, this.projects.length);
  }

  showLess() {
    this.showCount = Math.max(this.showCount - 3, 3);
    // No scrolling here, button stays in place
  }

  // Check if all cards are visible
  get isAllShown(): boolean {
    return this.showCount >= this.projects.length;
  }

  // Check if "Show Less" button should be visible
  get canShowLess(): boolean {
    return this.showCount > 3;
  }
}
