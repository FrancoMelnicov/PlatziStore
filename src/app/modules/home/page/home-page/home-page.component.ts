import { Component, OnInit } from '@angular/core';

//modules
import { Product } from './../../../../core/models/product.model';

//services
import { ProductsService } from './../../../../core/services/products/products-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productsList: Product[] = [];
  private limitProducts: number = 12;
  private offsetProducts: number = 0;

  constructor(private _product: ProductsService) { }

  ngOnInit(): void {

    this.loadMoreProducts();
  }

  loadMoreProducts(): void {
    this._product.getProductsByPage(this.limitProducts, this.offsetProducts).subscribe({
      next: data => {
        this.productsList = this.productsList.concat(data)
        this.offsetProducts += this.limitProducts;
      },
      error: err => console.log(err)
    })
  }
}
