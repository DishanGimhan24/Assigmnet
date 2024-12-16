import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './cart-view-edit.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  
})
export class CartViewEditComponent implements OnInit {
  cartForm: FormGroup;
  cartId: string;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cartForm = this.fb.group({
      userName: ['', Validators.required],
      productName: ['', Validators.required],
      productQuantity: ['', [Validators.required, Validators.min(1)]],
      TotalPrice: ['', [Validators.required, Validators.min(0)]],
    });

    this.cartId = '';
  }

  ngOnInit(): void {
    // Get cart ID from route params
    this.cartId = this.route.snapshot.paramMap.get('id') || '';

    // Fetch the cart details
    this.cartService.getCartById(this.cartId).subscribe({
      next: (response) => {
        if (response.success) {
          // Populate the form with cart data
          this.cartForm.setValue({
            userName: response.data.userName,
            productName: response.data.productName,
            productQuantity: response.data.productQuantity,
            TotalPrice: response.data.TotalPrice,
          });
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        console.error('Error fetching cart:', error);
      },
    });
  }

  // Update the cart
  updateCart(): void {
    if (this.cartForm.valid) {
      this.cartService.updateCart(this.cartId, this.cartForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            alert('Cart updated successfully!');
            this.router.navigate(['/']); // Navigate back to the cart list
          } else {
            alert('Update failed');
          }
        },
        error: (error) => {
          console.error('Error updating cart:', error);
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
