import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {

  productDetails: any;
  loading: boolean = false

  constructor(private _ProductsService: ProductsService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.getProduct(params['id']);
      }
    });
  }

  getProduct(id: any) {
    this.loading = true;
    this._ProductsService.getProductDetails(id).subscribe((res) => {
      this.productDetails = res
      this.loading = false;
    },
      err => {
        this.loading = false;
        alert(err.message);
      }
    )
  }
}
