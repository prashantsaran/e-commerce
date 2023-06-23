import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/service/items.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private itemsService: ItemsService,private router:Router){

  }
  searchOnEnter(itemName: string): void {
    // const selectedItem = this.itemsService.searchItemByName(itemName);
    // this.itemsService.setData(selectedItem);
    this.router.navigate(['/search-page'], { queryParams: { itemName: itemName } });

  }
    viewCart(){
      this.router.navigate(['/cart'])
    }
}
