import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators,FormsModule  } from '@angular/forms';
import { CartViewService } from './cart-view.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule,FormsModule],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  carts: any[] = []; // List to store all cart data
  filteredCarts: any[] = []; // List to store filtered cart data
  searchQuery: string = ''; // Search query for filtering the carts

  cartForm: FormGroup;

  constructor(private cartViewService: CartViewService) {
    // Initialize the cartForm in the constructor
    this.cartForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  ngOnInit() {
    // Fetch carts initially
    this.fetchCarts();
  }

  // Fetch the carts from the backend
  fetchCarts() {
    this.cartViewService.getAllCarts().subscribe((response) => {
      if (response.success) {
        this.carts = response.data;
        this.filteredCarts = [...this.carts]; // Initialize the filteredCarts with all data
        console.log('Carts:', this.carts);
      }
    });
  }

  // Delete a cart
  deleteCart(id: string) {
    this.cartViewService.deleteCart(id).subscribe({
      next: (response) => {
        console.log('Delete response:', response);
        this.fetchCarts(); // Fetch the updated list of carts
      },
      error: (error) => {
        console.error('Error deleting cart:', error);
      },
    });
  }


}
