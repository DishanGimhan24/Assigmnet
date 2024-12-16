import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CartService } from '../services/cart.service';
import { error } from 'console';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], // Plural corrected
})
export class CartComponent implements OnInit {
  carts: any[] = []; // List to store cart data
  cartForm: FormGroup; // Form group for cart inputs

  constructor(private cartService: CartService) {
    // Initialize form group with required fields
    this.cartForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      productQuantity: new FormControl('', Validators.required),
      TotalPrice: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.fetchCarts();
  }

  // Fetch all carts
  fetchCarts() {
    this.cartService.getAllCarts().subscribe((response) => {
      if (response.success) {
        this.carts = response.data;
      }
    });
  }

  // Add a new cart
  addCart() {
    if (this.cartForm.valid) {
      console.log('Form Data:', this.cartForm.value); // Debugging
      this.cartService.addCart(this.cartForm.value).subscribe(
        (response) => {
          if (response.success) {
            alert(response.message);
            this.cartForm.reset();
            this.fetchCarts();
          }
        },
        (error) => {
          console.error(' Error adding cart: ', error);
        }
      );
    }
  }

  // Delete a cart by ID
  deleteCart(id: string) {
    this.cartService.deleteCart(id).subscribe((response) => {
      if (response.success) {
        alert(response.message);
        this.fetchCarts();
      }
    });
  }
}
