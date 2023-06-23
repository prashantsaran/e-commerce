import { Component, OnInit ,OnChanges } from '@angular/core';
import { Items } from 'src/app/interface/items';
import { ItemsService } from 'src/app/service/items.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.component.html',
  styleUrls: ['./iteminfo.component.css']
})
export class IteminfoComponent implements OnInit{
  singleItem:Items | undefined;
  
  constructor(private itemsService: ItemsService,private route: ActivatedRoute) {


    // const selectedItem = this.itemsService.searchItemByName(itemName);
    // this.itemsService.setData(selectedItem);
    
      // this.singleItem=this.itemsService.getSingleItem();
      // console.log(this.singleItem);
  
    
   

  }
  

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const itemName = params['itemName'];

    console.log(itemName);
    this.singleItem = this.itemsService.searchItemByName(itemName);
    console.log(this.singleItem);
    console.log(this.singleItem?.info);
  });
}
  // ngOnInit(){
  //   this.singleItem=this.itemsService.getSingleItem();
  //   console.log(this.singleItem);
  // }
  // ngOnChanges() {
  //   this.singleItem=this.itemsService.getSingleItem();
  //   console.log(this.singleItem);

  // }
   addToCart(item:Items){
      this.itemsService.addItem(item);
      item.clicked = true;  // Set 'clicked' property to true when the button is clicked
      console.log(item.clicked);

    }


}
