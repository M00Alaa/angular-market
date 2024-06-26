import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products')
  }

  getProductDetails(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id)
  }

  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories')
  }

  getCategoryProducts(categoryName: any) {
    return this.http.get(environment.baseApi + `products/category/${categoryName}`)
  }
}
