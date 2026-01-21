import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactInfo {
  icon: string;
  value: string;
  type: 'phone' | 'email' | 'location';
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  loading = false;
  contactForm: FormGroup;
  submitted = false;

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shikha-rawat-33591a307/',
      icon: 'linkedin.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/shikha061987?tab=repositories',
      icon: 'github.png',
    },
  ];

contactInfo: ContactInfo[] = [
  { icon: 'email_icon.png', value: 'rrawatshikha@gmail.com', type: 'email' },
  { icon: 'phone-icon.png', value: '4703052136', type: 'phone' },
  { icon: 'location-icon.png', value: '1705 walking horse trl Cumming GA', type: 'location' },
];
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  callNow(contactnumb: string) {
    window.location.href = 'tel:' + contactnumb;
  }

  openMap(location: string) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(url, '_blank');
  }

  sendEmail(email: string) {
    // window.open('mailto:test@example.com', '_blank');
    window.open(`mailto:${email}`, '_blank');
  }
  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      console.warn('Form is invalid', this.contactForm.value);
      return;
    }

    this.loading = true;

    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_cnciwg4',
        'template_k38tcym',
        formData,
        '7CZcx7HU9LBzrqzG8'
      )
      .then((response) => {
        this.loading = false;
        this.openDialog();

        // Reset form
        this.contactForm.reset();
        this.submitted = false;

        // UX improvement: scroll to top of form
        const formElement = document.querySelector('#contact form');
        formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Optional: focus the first input
        const firstInput = formElement?.querySelector('input');
        (firstInput as HTMLElement)?.focus();
      })
      .catch((error) => {
        this.loading = false;
        console.error('EmailJS error details:', error);
        this.openDialog();
      });
  }

  showDialog = false;

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

handleContactClick(contact: ContactInfo) {
    if (contact.type === 'phone') this.callNow(contact.value);
    else if (contact.type === 'location') this.openMap(contact.value);
    else this.sendEmail(contact.value);
  }

  /*--- Form Error ---*/
  isInvalid(field: string) {
    return this.submitted && this.contactForm.controls[field].invalid;
  }
}
