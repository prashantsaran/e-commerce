import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/interface/items';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  selectedItem : Items [] | undefined;
  itemList: Items[] = [];

  constructor(private itemsService: ItemsService,private router:Router) {
    this.itemList = this.itemsService.getAllItems();


    
  }

  

  // searchOnEnter(itemName:string):void {
  //   console.log(this.itemsService.searchItemByName(itemName));
    
  //   this.itemsService.setData(this.itemsService.searchItemByName(itemName));
    
  //   this.router.navigate(['/iteminfo'])
    


  // }
  


  //   viewCart(){
  //     this.router.navigate(['/cart'])
  //   }

    addToCart(item:Items){
      this.itemsService.addItem(item);
      item.clicked = true;  // Set 'clicked' property to true when the button is clicked
      console.log(item.clicked);

    }
    itemCardClicked(item:Items):void{
      this.router.navigate(['/search-page'], { queryParams: { itemName: item.name } });

    }

  

}

