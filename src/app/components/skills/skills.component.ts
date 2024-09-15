import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent implements AfterViewInit, OnDestroy {

  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const slideWrapper = document.querySelector('.slide-wrapper') as HTMLElement;

      if (slideWrapper) {
        const slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        const totalSlides = slides.length;
        const slideWidth = slides[0].offsetWidth;
        const spacing = parseInt(window.getComputedStyle(slides[0]).marginRight, 10);
        const totalWidth = (slideWidth + spacing) * totalSlides;

        for (let i = 0; i < 2; i++) {
          slides.forEach(slide => {
            const clone = slide.cloneNode(true) as HTMLElement;
            slideWrapper.appendChild(clone);
          });
        }

        slideWrapper.style.width = `${totalWidth * 2}px`;

        // Remove the interval since we're handling the infinite loop with CSS
        // No need to toggle the 'reverse' class; the animation will loop infinitely
      }
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
