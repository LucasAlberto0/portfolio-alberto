import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

export interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent implements AfterViewInit {
  readonly skillsRow1: Skill[] = [
    { name: 'Angular', icon: 'icons/angularIcon.webp' },
    { name: 'Typescript', icon: 'icons/tsIcon.webp' },
    { name: 'React', icon: 'icons/reactIcon.svg' },
    { name: 'PostgreSQL', icon: 'icons/postgresqlIcon.svg' },
    { name: 'JavaScript', icon: 'icons/javascriptIcon.webp' },
    { name: 'Git', icon: 'icons/gitIcon.webp' },
    { name: 'Sass', icon: 'icons/sassIcon.webp' },
    { name: 'Tailwind', icon: 'icons/tailwindIcon.svg' },
    { name: 'Next.Js', icon: 'icons/nextjsIcon.webp' }
  ];

  readonly skillsRow2: Skill[] = [
    { name: 'Figma', icon: 'icons/figmaIcon.webp' },
    { name: 'Supabase', icon: 'icons/supabaseIcon.svg' },
    { name: 'N8N', icon: 'icons/n8nIcon.svg' },
    { name: 'Bootstrap', icon: 'icons/bootstrapIcon.svg' },
    { name: 'Vue.Js', icon: 'icons/vueIcon.svg' },
    { name: '.Net', icon: 'icons/netIcon.svg' },
    { name: 'Node.js', icon: 'icons/nodeIcon.svg' },
    { name: 'Flutter', icon: 'icons/flutterIcon.webp' }
  ];

  readonly allSkills: Skill[] = [...this.skillsRow1, ...this.skillsRow2];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        AOS.refresh();
      }, 150);
    }
  }
}
