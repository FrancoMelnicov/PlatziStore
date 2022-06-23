
import { Component, OnInit } from '@angular/core';

//services
import { StoreService } from 'src/app/core/services/store/store-service.service';
import { ProductsService } from 'src/app/core/services/products/products-service.service';

//models
import { Category } from './../../../core/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counterProducts!: Number;
  userName!: string;
  categoriesList: Category[] = [];

  constructor(
    private _store: StoreService,
    private _product: ProductsService
  ) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('user_name')!;
    this._store.myCart$.subscribe({
      next: product => this.counterProducts = product.length,
      error: err => console.log(err)
    });
    this.getCategoryList();
  }

  getCategoryList(){
    this._product.getCategories().subscribe({
      next: data => {
        this.categoriesList = data;
      }
    })
  }

}
