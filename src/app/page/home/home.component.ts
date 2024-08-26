import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PhotoComponent } from '../../components/photo/photo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PhotoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
