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

  constructor (private _ProductsService:ProductsService) {}

  ngOnInit():void {
    this.getAllProducts();
    this.getAllCategories();
  }
  
  getAllProducts() {
    this._ProductsService.getAllProducts().subscribe((res:any) => {
      this.products = res
      console.log(this.products);
    },
    err => {alert(err.message);
    }
    )
  }

  getAllCategories() {
    this._ProductsService.getAllCategories().subscribe((res:any) => {
      this.categories = res
      console.log(this.categories);
    },
    err => {alert(err.message);
    }
    )
  }
  
  filterCategories(event:any) {
    let value = event.target.value
    console.log(value);

    (value == 'all') ? this.getAllProducts() : this.getCategoryProducts(value)
  }

  getCategoryProducts(categoryName:any) {
    this._ProductsService.getCategoryProducts(categoryName).subscribe((res:any) => {
      this.products = res
      console.log(this.products);
    },
    err => {alert(err.message);
    }
    )
  }

}
