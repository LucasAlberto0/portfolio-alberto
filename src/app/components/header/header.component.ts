import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const header = document.querySelector('#header') as HTMLElement;
    if (header) {
      header.classList.toggle('rolagem', window.scrollY > 600);
    }
  }

  
}

