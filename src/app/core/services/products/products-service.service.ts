import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

//enviroments
import { environment } from 'src/environments/environment';

//models
import { Product, CreateProductDTO, UpdateProductDTO, Category } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.api_url}/api/v1`;

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get<Product[]>(`${this.apiUrl}/products?limit=30&offset=0`)
    .pipe(
      //prueba de manejo de errores para las requests
      catchError((error: HttpErrorResponse) => {
        if(error.status === HttpStatusCode.BadGateway){
          return throwError(() => new Error('Error en el servidor'));
        }
        if(error.status === HttpStatusCode.NotFound){
          return throwError(() => new Error('Producto no encontrado'));
        }
        if(error.status === HttpStatusCode.Unauthorized){
          return throwError(() => new Error('Solicitud no autorizada'));
        }
        return throwError(() => new Error('Error en la request'));
      })
    )
  }

  getProductsByPage(limit: number, offset: number){
    return this._http.get<Product[]>(`${this.apiUrl}/products`, { params: {limit, offset}});
  }

  getProductDetails(id_product: number){
    return this._http.get<Product>(`${this.apiUrl}/products/${id_product}`);
  }

  postProduct(product: CreateProductDTO){
    return this._http.post<Product>(`${this.apiUrl}/products`, product);
  }

  putProduct(id_product:number, product: UpdateProductDTO){
    return this._http.put<Product>(`${this.apiUrl}/products/${id_product}`, product);
  }

  deleteProduct(id_product: number){
    return this._http.delete<boolean>(`${this.apiUrl}/products/${id_product}`);
  }

  getCategories(){
    return this._http.get<Category[]>(`${this.apiUrl}/categories`);
  }
  
  getProductsByCategory(id_category: number, limit: number, offset: number){
    return this._http.get<Product[]>(`${this.apiUrl}/categories/${id_category}/products`, { params: {limit, offset}});
  }
}
