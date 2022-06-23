import { switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//services
import { ProductsService } from 'src/app/core/services/products/products-service.service';
import { Product } from 'src/app/core/models/product.model';
import { Category } from './../../../../core/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  productsList: Product[] = [];
  category!: Category;
  private categoryId: number | null = null;
  private limitProducts: number = 12;
  private offsetProducts: number = 0;

  constructor(
    private route: ActivatedRoute,
    private _product: ProductsService
  ) { }

  ngOnInit(): void {
    this.getParamsAndLoad();
  }

  //obtenemos los datos de los parametros y cargamos los primeros valores de la lista
  getParamsAndLoad(){
    this.route.paramMap.pipe(
      switchMap( params => {  
        this.categoryId = Number(params.get('id'));
        if(this.categoryId){
          return this._product.getProductsByCategory(Number(this.categoryId), this.limitProducts, this.offsetProducts)
        }
        return [];
      }) 
    )
    .subscribe({
      next: data => {
        this.productsList = data;
        this.getNameCategory();
      },
      error: err => console.log(err)
    })
  }

  getNameCategory(){
    this._product.getCategories().subscribe({
      next: data => {
        let indexCategory = data.findIndex( category => category.id == this.categoryId)
        this.category = data[indexCategory];
      },
      error: err => console.log(err)
    })
  }

  loadMoreProducts(): void {
    console.log("A")
    this._product.getProductsByCategory(Number(this.categoryId), this.limitProducts, this.offsetProducts).subscribe({
      next: data => {
        this.productsList = this.productsList.concat(data)
        this.offsetProducts += this.limitProducts;
      },
      error: err => console.log(err)
    })
  }

}