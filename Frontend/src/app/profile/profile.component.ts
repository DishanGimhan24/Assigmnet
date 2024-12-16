import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name = new FormControl('');
  email = new FormControl('');

  save(){
    alert('Name: ' + this.name.value + ' Email: ' + this.email.value);
  }

}
