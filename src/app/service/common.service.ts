import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Items } from '../class/item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  base_Url = './assets/img/';
  constructor(private http: HttpClient) {}
  getItem(): Observable<Items> {
    const productUrl = 'http://localhost:3000/product';
    return this.http.get<Items>(productUrl);
  }
  getProductDetails(id) {
    const productUrl = 'http://localhost:3000/product';
    return this.http.get(productUrl + '/' + id);
  }
  createProduct(productBody): Observable<Items> {
    const productUrl = 'http://localhost:3000/product';
    return this.http.post<Items>(productUrl, productBody);
  }
  deleteItem(productId): Observable<Items> {
    const productUrl = 'http://localhost:3000/product';
    return this.http.delete<Items>(productUrl + '/' + productId);
  }
/*   uploadImage(image: File): Observable<Items> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<Items>(
      this.base_Url + '/' + 'http://localhost:3000/product',
      image
    );
  } */
}
