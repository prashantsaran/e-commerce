import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/service/items.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  itemsService: ItemsService = inject(ItemsService);
  constructor(private router: Router) {

  }
  searchOnEnter(itemName: string): void {
    this.router.navigate(['/search-page'], { queryParams: { itemName: itemName } })
  }
  viewCart() {

    this.router.navigate(['/cart'])
  }
}
