import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PhotoComponent } from '../../components/photo/photo.component';
import { AboutComponent } from '../../components/about/about.component';
import { TrajectoryComponent } from '../../components/trajectory/trajectory.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PhotoComponent, CommonModule, AboutComponent, TrajectoryComponent, SkillsComponent, ProjectsComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  isSafari = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isSafari = this.detectSafari();
    }
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
