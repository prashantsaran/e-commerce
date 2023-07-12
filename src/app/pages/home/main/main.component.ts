import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/interface/items';
import { ItemsService } from 'src/app/service/items.service';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name: string;
  selectedItem: Items;
  isFetching: boolean = false;

  itemList: Items[];
  itemsService: ItemsService = inject(ItemsService);

  constructor(private router: Router, private http: HttpClientModule) {
    this.name = ""
    this.selectedItem = {} as Items;

    this.itemList = [];

  }


  addToCart(item: Items) {
    if (item.clicked == false) {
      this.itemsService.addItem(item);
      item.clicked = true;
      console.log(item.clicked);
    }

  }
  itemCardClicked(item: Items): void {
    this.router.navigate(['/search-page'], { queryParams: { itemName: item.name } });

  }

  ngOnInit() {

    this.name = this.itemsService.name;



    this.itemList = this.itemsService.itemList;



  }

}