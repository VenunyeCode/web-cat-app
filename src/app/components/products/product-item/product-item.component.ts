import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActionEvent } from 'src/app/state/products.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  @Input() product! : Product;
  @Output() ProductItemEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  ngOnInit(): void {
      
  }

  onDelete(product : Product){

  }

  onSelect(product : Product){

  }

  onEdit(product : Product){

  }
}
