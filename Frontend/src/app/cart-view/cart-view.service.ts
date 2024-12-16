import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartViewService {
  private baseUrl = '/api/carts'; // Correct the URL here

  constructor(private http: HttpClient) { }

  //get all carts
  getAllCarts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`); // Corrected template literal
  }

  //delete cart
  deleteCart(id: string): Observable<any> { // Use string for id if _id is a string in the backend
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' }); 
    
  }

    //edit cart
    editCart(id: string, updatedCart: any): Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/edit/${id}`, updatedCart);
    }
   
    

}