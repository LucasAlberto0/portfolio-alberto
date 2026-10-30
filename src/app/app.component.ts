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
  private preloadedImages: HTMLImageElement[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initViewportHeight();
      this.preloadSiteImages();
      AOS.init();
      window.addEventListener('load', () => AOS.refresh());
    }
  }

  private preloadSiteImages(): void {
    const urls = [
      '/albertofoto.webp',
      '/albertoFoto3.webp',
      '/assinatura.webp',
      '/logocreathp.webp',
      'icons/line-start-black.webp',
      'icons/line-end-black.webp',
      'icons/line-start-white.webp',
      'icons/line-end-white.webp',
      'icons/mostenIcon.webp',
      'icons/DAIIcon.webp',
      'icons/data-object.webp',
      'icons/culturaInglesaIcon.webp',
      'icons/computer.webp',
      'icons/gmailIcon.webp',
      'icons/githubIcon.webp',
      'icons/linkedinIcon.webp',
      'icons/whatsappIcon.webp',
      'icons/happyFaceIcon.webp'
    ];
    urls.forEach(src => {
      const img = new Image();
      img.decoding = 'sync';
      img.src = src;
      if (img.decode) {
        img.decode().catch(() => {});
      }
      this.preloadedImages.push(img);
    });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.resizeListener) window.removeEventListener('resize', this.resizeListener);
      if (this.orientationListener) window.removeEventListener('orientationchange', this.orientationListener);
    }
  }

  private initViewportHeight(): void {
    const isSafari = this.detectSafari();
    if (isSafari) {
      document.documentElement.classList.add('is-safari');
    }

    const setAppHeight = () => {
      let height = window.innerHeight;
      if (isSafari) {
        const probe = document.createElement('div');
        probe.style.cssText = 'position:fixed;top:0;left:0;height:100lvh;visibility:hidden;pointer-events:none;z-index:-9999;';
        document.body.appendChild(probe);
        const lvh = probe.getBoundingClientRect().height;
        probe.remove();
        if (lvh > 0) height = lvh;
      }
      document.documentElement.style.setProperty('--app-height', `${height}px`);
    };

    setAppHeight();
    this.lastWidth = window.innerWidth;

    this.resizeListener = () => {
      const isMobile = window.innerWidth <= 1070;

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

  private detectSafari(): boolean {
    if (typeof window === 'undefined' || !window.navigator) return false;
    const ua = window.navigator.userAgent;
    const vendor = window.navigator.vendor || '';
    const isOther = /CriOS|GSA|FxiOS|EdgiOS|OPiOS|OPT|DuckDuckGo/i.test(ua);
    if (isOther) return false;
    const isApple = /Apple Computer/i.test(vendor);
    const hasSafari = /Safari/i.test(ua);
    const hasVersion = /Version\//i.test(ua);
    return (isApple && hasSafari && hasVersion) ||
      (!isOther && /iPhone|iPad|iPod/i.test(ua) && hasSafari && hasVersion);
  }
}
