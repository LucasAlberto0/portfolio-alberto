import { Component } from '@angular/core';
import { Photo2Component } from '../photo2/photo2.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Photo2Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
