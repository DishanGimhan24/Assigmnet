import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Employee{
  id: string;
  name: string;
  email: string;
  password: string;
  
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  show(){
    alert('Hello Master');
     console.log('Hello Master');
  }
  employees: Employee[] = [
   {id: '1', name: 'John', email:'dishan@gmail.com', password:'123'},
    {id: '2', name: 'Doe', email:'shan@gmail.com', password:'1234'},
    {id: '3', name: 'Smith', email:'gimhan@gmail.com', password:'12345'},
  ];
  

}
