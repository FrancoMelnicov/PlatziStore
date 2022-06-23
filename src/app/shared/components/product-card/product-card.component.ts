
import { Component, Input, OnInit } from '@angular/core';

//services
import { StoreService } from './../../../core/services/store/store-service.service';

//models
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
  }

  addProductShopCart(product: Product){
    this._storeService.addProduct(product)
  }
}
