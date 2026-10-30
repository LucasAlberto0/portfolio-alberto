import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  menuAtivo = false;
  isScrolled = false;

  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const threshold = typeof window !== 'undefined' && window.innerWidth <= 900 ? 70 : 600;
    this.isScrolled = window.scrollY > threshold;
    const header = document.querySelector('#header') as HTMLElement;
    if (header) {
      header.classList.toggle('rolagem', this.isScrolled);
    }
  }
}

