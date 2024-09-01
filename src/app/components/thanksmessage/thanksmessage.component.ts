import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanksmessage',
  standalone: true,
  imports: [],
  templateUrl: './thanksmessage.component.html',
  styleUrl: './thanksmessage.component.scss'
})
export class ThanksmessageComponent {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }
}
