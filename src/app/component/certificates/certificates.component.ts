import { CommonModule } from '@angular/common';
  import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register(); // VERY IMPORTANT for Swiper custom elements

@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificatesComponent {
 certifications = [

   {
      title: 'Mastering Angular Development',
      issuer: 'Coursera',
      img: './certificate/Certificate-Angular-Coursera.jpg',
      skills: ['Binding','Routing', 'State Management','RxJS', 'Services',' Forms','Angular CLI','Components'],
      
    },
    {
      title: 'Angular Live Class Project',
      issuer: 'Saho Soft Technologies Pvt ltd ',
      img: './certificate/Certificate-Angular.jpg',
      skills: ['Routing', 'API Integration','RxJS', 'Services',' Forms','Angular CLI','Components'],
      
    },
    {
      title: 'Type Script',
      issuer: 'Saho Soft Technologies Pvt ltd ',
      img: './certificate/Certificate-TypeScript.jpg',
      skills: ['Fundamentals', 'Functions', 'Generics', 'Modules','Error Handling','Type Safety'],
    },
    {
      title: 'Cloud Computing',
      issuer: 'IBM Skills Build',
      img: './certificate/cloud-certificate.png',
      skills: ['Fundamentals', 'Security', 'Deployment', 'Scalability','CI/CD Foundations'],
    },
    //  {
    //   title: 'Java Script',
    //   issuer: 'simplilearn SkillUP',
    //   img: './certificate/JavaScript_Certificate.png',
    //   // skills: ['Components', 'Services', 'Routing', 'TypeScript'],
    // },
      {
      title: 'Java Script',
      issuer: 'Hacker Ranks',
      img: './certificate/javascript_basic certificate.jpg',
      skills: ['Core JavaScript (ES6+)', 'Async Programming', 'Functions', 'Problem-Solving'],
    },
    //  {
    //   title: 'CSS',
    //   issuer: 'Hacker Ranks',
    //   img: './certificate/css certificate.jpg',
    //   // skills: ['Components', 'Services', 'Routing', 'TypeScript'],
    // },
    //  {
    //   title: 'Performer Of Month',
    //   issuer: 'Classic Informatics',
    //   img: './certificate/performance-certificate.jpeg',
    //   skills: ['Components', 'Services', 'Routing', 'TypeScript'],
    // }
   
  ];
  certificatedownloadImg(imageUrl: string) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'certificate.jpg'; // name of downloaded file
  link.click();
}

}
