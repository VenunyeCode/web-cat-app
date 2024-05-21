import { Component, EventEmitter, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/products.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {
    
    @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
    
    onSearch(dataForm: any) {
      this.productEventEmitter.emit({type : ProductActionsTypes.SEARCH_PRODUCTS, payload : dataForm.keyword })
    }

    onNewProduct() {
      this.productEventEmitter.emit({type : ProductActionsTypes.NEW_PRODUCT})
    }

    onGetAvailableProducts() {
      this.productEventEmitter.emit({type : ProductActionsTypes.GET_AVAILABLE_PRODUCTS})
    }

    onGetSelectedProducts() {
      this.productEventEmitter.emit({type : ProductActionsTypes.GET_SELECTED_PRODUCTS})
    }

    onGetAllProducts() {
      this.productEventEmitter.emit({type : ProductActionsTypes.GET_ALL_PRODUCTS});
    }

}
