import { Component , OnChanges, SimpleChanges } from '@angular/core';

import { Items } from 'src/app/interface/items';
import { ItemsService } from 'src/app/service/items.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cartList:Items[]=[];
 
  itemList: Items[] = [];

  constructor(private itemsService: ItemsService) {
    this.cartList = this.itemsService.getAllCarts();
    this.calculateTotalPrice();
  }


  isCardEmpty():boolean{
    return this.cartList.length==0;
  }
  deleteCartItem(item: Items): void {
    this.itemsService
    const index = this.cartList.indexOf(item);
    if (index !== -1) {
      this.cartList.splice(index,1);  // 1= number of elements to be removed
    }
}
calculateTotalPrice(): number {
  let totalPrice = 0;

  for (const item of this.cartList) {
    totalPrice += item.price * item.totalItems;
  }
  return totalPrice;
}


decreaseTotalItems(item: Items): void {
  if (item.totalItems > 1) {
    item.totalItems--;
    this.calculateTotalPrice();
  }
}

increaseTotalItems(item: Items): void {
  item.totalItems++;
  this.calculateTotalPrice();
}


}