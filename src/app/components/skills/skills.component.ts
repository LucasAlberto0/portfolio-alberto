import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent implements AfterViewInit{
  
  ngAfterViewInit() {
    const slideWrapper = document.querySelector('.slide-wrapper') as HTMLElement;

    if (slideWrapper) {
      const slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
      const totalSlides = slides.length;
      const slideWidth = slides[0].offsetWidth;
      const spacing = parseInt(window.getComputedStyle(slides[0]).marginRight, 10);
      const totalWidth = (slideWidth + spacing) * totalSlides;

      // Duplicar slides
      slides.forEach(slide => {
        const clone = slide.cloneNode(true) as HTMLElement;
        slideWrapper.appendChild(clone);
      });
      slides.forEach(slide => {
        const clone = slide.cloneNode(true) as HTMLElement;
        slideWrapper.appendChild(clone);
      });

      // Ajustar a largura do slide-wrapper para permitir rotação infinita
      slideWrapper.style.width = `${totalWidth * 2}px`; // Largura total dos slides duplicados
    }
  }
}
