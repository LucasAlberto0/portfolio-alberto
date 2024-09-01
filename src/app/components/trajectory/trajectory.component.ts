import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Photo2Component } from '../photo2/photo2.component';

@Component({
  selector: 'app-trajectory',
  standalone: true,
  imports: [Photo2Component],
  templateUrl: './trajectory.component.html',
  styleUrl: './trajectory.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrajectoryComponent {

}
