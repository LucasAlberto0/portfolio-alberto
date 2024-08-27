import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  
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

        
        slides.forEach(slide => {
          const clone = slide.cloneNode(true) as HTMLElement;
          slideWrapper.appendChild(clone);
        });
        slides.forEach(slide => {
          const clone = slide.cloneNode(true) as HTMLElement;
          slideWrapper.appendChild(clone);
        });
        

        
        slideWrapper.style.width = `${totalWidth * 2}px`; 
      }
    }
  }
}
