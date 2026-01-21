import { Component } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component';
import {  RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from "./component/about/about.component";
import { ExperienceComponent } from "./component/experience/experience.component";
import { SkillsComponent } from "./component/skills/skills.component";
import { ProjectComponent } from "./component/project/project.component";
import { ContactComponent } from "./component/contact/contact.component";
import { NgParticlesModule } from 'ng-particles';
import { AnimatedBackgroundComponent } from './component/animated-background/animated-background.component';


@Component({
  selector: 'app-root',
  imports: [ AnimatedBackgroundComponent, NgParticlesModule, RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ExperienceComponent, SkillsComponent, ProjectComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  
  title = 'Shikha_Rawat_Portfolio';

}
