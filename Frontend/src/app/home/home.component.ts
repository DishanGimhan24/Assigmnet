import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Dishan';
  position = 'software Engineer';

  ariaLabeltxt = "This is a button. when clickin this button, it will open somthing";

  colSpan=2;

}
