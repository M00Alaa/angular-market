import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[] = []
  categories: any[] = []

  cartProducts: any[] = []

  loading: boolean = false
  constructor(private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.loading = true;
    this._ProductsService.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.loading = false;
    },
      err => {
        this.loading = false;
        alert(err.message);
      }
    )
  }

  getAllCategories() {
    this.loading = true;
    this._ProductsService.getAllCategories().subscribe((res: any) => {
      this.categories = res
      this.loading = false;
    },
      err => {
        this.loading = false;
        alert(err.message);
      }
    )
  }

  filterCategories(event: any) {
    let value = event.target.value
    console.log(value);

    (value == 'all') ? this.getAllProducts() : this.getCategoryProducts(value)
  }

  getCategoryProducts(categoryName: any) {
    this.loading = true;
    this._ProductsService.getCategoryProducts(categoryName).subscribe((res: any) => {
      this.products = res
      this.loading = false;
    },
      err => {
        this.loading = false;
        alert(err.message);
      }
    )
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert('this product is already in your cart')
      }
      else {
        this.cartProducts.push(event)
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    }
    else {
      this.cartProducts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }
  }

}
