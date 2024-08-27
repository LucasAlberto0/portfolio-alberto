import { Component } from '@angular/core';
import { Photo2Component } from '../photo2/photo2.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [Photo2Component],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
