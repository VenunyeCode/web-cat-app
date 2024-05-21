import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/products.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsList$ : Observable<AppDataState<Product[]>> | null = null;
  @Output() productsEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  readonly DataStateEnum = DataStateEnum;

  ngOnInit(): void {
      
  }

  onEdit(p : Product) {
    this.productsEventEmitter.emit({type : ProductActionsTypes.EDIT_PRODUCT})
  }
  onDelete(p : Product) {
    this.productsEventEmitter.emit({type : ProductActionsTypes.DELETE_PRODUCT, payload : p})
  }
  onSelect(p : Product) {
    this.productsEventEmitter.emit({type : ProductActionsTypes.SELECT_PRODUCT, payload : p})
  }

  onActionEvent($event : ActionEvent){
    
  }
}
