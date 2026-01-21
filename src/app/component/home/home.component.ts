import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';
// import 'aos/dist/aos.css';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text = 'Shikha  Rawat';
  textArray = this.text.split('');

  viewBtnVal = [
  {
    text: '📩 Contact Me',
    href: '#contact',
     classes: 'px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap'

  },
  {
    text: '💻 View Projects',
    href: '#projects',
    classes: 'viewProjdarkColor px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-300 font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap'

  }
];

/* -- Animation delay logic for Name --*/
getDelay(i: number): string {
  return `${i * 0.2}s`;
}
}