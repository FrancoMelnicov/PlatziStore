import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//services
import { ProductsService } from './../../../../core/services/products/products-service.service';

//models
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(
    private _product: ProductsService, 
    private _route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getIdAndLoadProduct();
  }

  getIdAndLoadProduct(){
    this._route.params.pipe(
      switchMap(params => {
        return this._product.getProductDetails(+params['id'])
      })
    ).subscribe({
      next: data => {
        this.product = data;
        console.log(this.product)
      },
      error: err => console.log(err)
    })
  }

  goBack(){
    this.location.back()
  }
}
