import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio-alberto';
  private lastWidth = 0;
  private resizeListener?: () => void;
  private orientationListener?: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initViewportHeight();
      AOS.init();
      window.addEventListener('load', () => AOS.refresh());
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.resizeListener) window.removeEventListener('resize', this.resizeListener);
      if (this.orientationListener) window.removeEventListener('orientationchange', this.orientationListener);
    }
  }

  private initViewportHeight(): void {
    const setAppHeight = () => {
      const probe = document.createElement('div');
      probe.style.cssText = 'position:fixed;top:0;left:0;height:100lvh;visibility:hidden;pointer-events:none;z-index:-9999;';
      document.body.appendChild(probe);
      const lvh = probe.getBoundingClientRect().height;
      probe.remove();

      const height = lvh > 0 ? lvh : window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${height}px`);
    };

    setAppHeight();
    this.lastWidth = window.innerWidth;

    this.resizeListener = () => {
      const isMobile = window.innerWidth <= 1070;
      // On mobile devices, ignore vertical-only toolbar toggle resizes when scrolling
      if (isMobile) {
        if (Math.abs(window.innerWidth - this.lastWidth) > 30) {
          this.lastWidth = window.innerWidth;
          setAppHeight();
          AOS.refresh();
        }
      } else {
        setAppHeight();
        AOS.refresh();
      }
    };

    this.orientationListener = () => {
      setTimeout(() => {
        this.lastWidth = window.innerWidth;
        setAppHeight();
        AOS.refresh();
      }, 150);
    };

    window.addEventListener('resize', this.resizeListener);
    window.addEventListener('orientationchange', this.orientationListener);
  }
}
