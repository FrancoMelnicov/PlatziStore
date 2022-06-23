import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//models
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //no debe ser accesible por otros servicios o componentes, solo consultar sus datos
  private myShopCar: Product[] = [];

  //observable que puede ser escuchado por cualquier componente de la aplicacion
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  //getter para consultar los datos
  getmyShopCar(): Product[]{
    return this.myShopCar;
  }

  addProduct(product: Product) {
    this.myShopCar.push(product);
    //transimitimos el estado de la lista
    this.myCart.next(this.myShopCar)
  }

  calculateTotalPrice(): number {
    return this.myShopCar.reduce((sum, item) => sum + item.price, 0)
  }
}
