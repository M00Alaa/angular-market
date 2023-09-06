import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[] = []

  constructor (private _ProductsService:ProductsService) {}

  ngOnInit():void {
    this.getAllProducts()
  }
  
  getAllProducts() {
    this._ProductsService.getAllProducts().subscribe((res:any) => {
      this.products = res
      console.log(this.products);
      
    })
  }
}
