import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Items } from 'src/app/interface/items';

// import { Items } from 'src/app/interface/items';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartList: Items[] = [];

  totalItemsInCart: number;

  itemList: Items[] = [];
  itemsService: ItemsService = inject(ItemsService);
  constructor() {
    this.cartList = this.itemsService.getAllCarts();
    this.totalItemsInCart = this.cartList.length;
    this.calculateTotalPrice();
  }



  deleteCartItem(item: Items): void {
    item.clicked = false;
    const index = this.cartList.indexOf(item);
    if (index !== -1) {
      this.totalItemsInCart -= item.totalItems;
      item.totalItems = 1;

      this.cartList.splice(index, 1);
    }
  }
  calculateTotalPrice(): number {
    let totalPrice = 0;

    for (const item of this.cartList) {
      totalPrice += item.price * item.totalItems;
    }
    return totalPrice;
  }
  changeTotalItems(item: Items, operation: string): void {

    if (operation == "decrease") {
      if (item.totalItems > 1) {

        item.totalItems--;
        this.totalItemsInCart--;



      }
    }
    else {
      this.totalItemsInCart++;
      item.totalItems++;
    }

    this.calculateTotalPrice();
  }



}