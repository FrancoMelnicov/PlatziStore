import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//models
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  //La funcion de este componente es listar todos los productos que son enviados por los componentes padres y emitir a los mismos funciones para la interaccion con estos datos

  @Input() productsList: Product[] = [];
  @Output() loadMore = new EventEmitter();
  @Input() actualLengthList!: number;
  prevLengthList: number = 0;
  showMore: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  loadMoreProducts() {
    if(this.prevLengthList == this.actualLengthList) this.showMore = false;
    this.prevLengthList = this.actualLengthList;
    this.loadMore.emit();
  }

}
