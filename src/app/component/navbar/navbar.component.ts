import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output,Renderer2 } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
activeLink = ''; // default active
 menuOpen = false;

 menuBarItem= ['about','experience','skills','projects','contact'];

 @Output() activeLinkChange = new EventEmitter<string>();

setLinkActive(link: string) {
  this.activeLinkChange.emit(link);
 
}


constructor(
  
  private renderer: Renderer2
) {}


setActive(link: string) {
  this.activeLink = link;
  this.renderer.removeClass(document.body, 'no-scroll');
  this.menuOpen = false;

  setTimeout(() => {
    const el = document.getElementById(link);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

/* ----------- Add Dark/Light mode ------------- */

 isDark = false;
 
 toggleMenu() {
  this.menuOpen = !this.menuOpen;

  if (this.menuOpen) {
    this.renderer.addClass(document.body, 'no-scroll');
  } else {
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}

/* --Function for Dark/Light mode screen-- */
toggleDarkMode() {
  this.isDark = !this.isDark;
   this.menuOpen = false; 

  if (this.isDark) {
    document.documentElement.classList.add('dark');

  } else {
    document.documentElement.classList.remove('dark');
  }
    this.renderer.removeClass(document.body, 'no-scroll');

}


/* --Close menubar on download/ Dark/Light mode click-- */
closeMenu() {
  this.menuOpen = false; // only close menu
    this.renderer.removeClass(document.body, 'no-scroll');

}

/* -- Add scroll tracking -- */
   @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home','about', 'education', 'experience', 'skills', 'projects', 'contact'];

    for (let sec of sections) {
      let element = document.getElementById(sec);
      if (!element) continue;

      const rect = element.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeLink = sec;
        break;
      }
    }
  }


}
