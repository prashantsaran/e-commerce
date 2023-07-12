import { Component, OnInit, OnChanges, inject } from '@angular/core';
import { ItemsService } from 'src/app/service/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/interface/items';


@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.component.html',
  styleUrls: ['./iteminfo.component.css']
})
export class IteminfoComponent implements OnInit {
  singleItem: Items;


  itemsService: ItemsService = inject(ItemsService);
  constructor(private route: ActivatedRoute, private router: Router) {
    this.singleItem = {} as Items;





  }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const itemName = params['itemName'];
      const foundItem = this.itemsService.searchItemByName(itemName);
      if (foundItem !== undefined) {
        this.singleItem = foundItem;
        console.log(this.singleItem);
        console.log(this.singleItem.info);
      } else {

        this.router.navigate(['/not-found'])
        console.log('Item not found.');
      }
    });
  }

  addToCart(item: Items) {
    this.itemsService.addItem(item);
    item.clicked = true;
    console.log(item.clicked);

  }


}
