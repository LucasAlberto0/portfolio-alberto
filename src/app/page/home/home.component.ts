import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PhotoComponent } from '../../components/photo/photo.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PhotoComponent, CommonModule, AboutComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
