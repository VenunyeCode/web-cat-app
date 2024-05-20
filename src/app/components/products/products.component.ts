import { Component, OnInit } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/state/products.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum

  constructor(private productService : ProductsService){}

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts()
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState : DataStateEnum.LOADED, data : data})}),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts()
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState : DataStateEnum.LOADED, data : data})
        }),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
      );

  }

  onGetAvailableProducts(){
    this.products$ = this.productService.getSelectedProducts()
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState : DataStateEnum.LOADED, data : data})
        }),
        startWith({dataState :DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))

        );
  }

  

  ngOnInit(): void {
   
  }

  onSearch(dataForm : any){
    this.products$ = this.productService.searchProducts(dataForm.keyword)
      .pipe(
        map(data => {
          return ({dataState : DataStateEnum.LOADED, data : data})
        }),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
      )
  }
}
