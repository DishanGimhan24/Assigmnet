import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = '/api/carts'; // Correct the URL here

  constructor(private http: HttpClient) {}

  // Add cart
  addCart(cart: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, cart); // Corrected template literal
  }

  // Get all carts
  getAllCarts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`); // Corrected template literal
  }

  // Delete cart
  deleteCart(id: string): Observable<any> { // Use string for id if _id is a string in the backend
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' }); // Corrected template literal
  }

  //fetch cart by id
  getCartById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`); // Corrected template literal
  }
  //update cart
  updateCart(id: string, cart: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, cart); // Corrected template literal
  }

}
