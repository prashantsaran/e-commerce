
import { Injectable } from '@angular/core';
import { Items } from '../interface/items';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class ItemsService {

singleitem: Items |undefined;
items: Items[] = [
{
name: 'Samsung',
color: 'Red',
price: 427,
quantity:0,
imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp',
clicked: false,
totalItems:1,
info:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32."

},
{
name: 'Camera',
color: 'Black',
price: 700,
quantity:0,
imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp',
clicked: false,
totalItems:1,
info:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32."
},
{
name: 'Iphone',
color: 'Black',
price: 35,
quantity:0,
imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
clicked: false,
totalItems:1,
info:"Display: 6.2-inch Dynamic AMOLED display with 2400 x 1080 pixels resolution\n" +
"Processor: Qualcomm Snapdragon 888 or Exynos 2100 chipset (depending on the region)\n" +
"RAM: 8GB\n" +
"Storage: Available in 128GB and 256GB configurations (non-expandable)\n" +
"Camera:\n" +
"Rear: 12MP wide-angle lens, 12MP ultra-wide-angle lens, and 64MP telephoto lens\n" +
"Front: 10MP sensor\n" +
"Battery: 4,000mAh capacity with support for fast wired and wireless charging, as well as reverse wireless charging\n" +
"Operating System: Samsung One UI based on Android 11\n" +
"Connectivity: 5G capable\n" +
"Design: Slim profile, metal and glass construction, minimal bezels\n" +
"Other Features: Dynamic AMOLED display with 120Hz refresh rate, water and dust resistance (IP68 rating)"
},
{
  name: 'Tshirt',
  color: 'White',
  price: 10,
  quantity:0,
  imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
  clicked: false,
  totalItems:1,
  info:""
  },
  {
    name: 'Tshirt',
    color: 'Black',
    price: 10,
    quantity:0,
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp',
    clicked: false,
    totalItems:1,
    info:""
    },
{
name: 'Laptop',
color: 'Grey',
price: 620,
quantity:0,
imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
clicked: false,
totalItems:1,
info: "Display: 6.2-inch Dynamic AMOLED display with 2400 x 1080 pixels resolution\n" +
"Processor: Qualcomm Snapdragon 888 or Exynos 2100 chipset (depending on the region)\n" +
"RAM: 8GB\n" +
"Storage: Available in 128GB and 256GB configurations (non-expandable)\n" +
"Camera:\n" +
"Rear: 12MP wide-angle lens, 12MP ultra-wide-angle lens, and 64MP telephoto lens\n" +
"Front: 10MP sensor\n" +
"Battery: 4,000mAh capacity with support for fast wired and wireless charging, as well as reverse wireless charging\n" +
"Operating System: Samsung One UI based on Android 11\n" +
"Connectivity: 5G capable\n" +
"Design: Slim profile, metal and glass construction, minimal bezels\n" +
"Other Features: Dynamic AMOLED display with 120Hz refresh rate, water and dust resistance (IP68 rating)"
}
];
cart: Items[] = [];

constructor() {
// Constructor logic, if any
}

addItem(item: Items): void {
this.cart.push(item);
}

getAllItems(): Items[] {
return this.items;
}

getAllCarts(): Items[] {
return this.cart;
}

searchItemByName(name: string): Items | undefined {
  const lowercaseName = name.toLowerCase(); // Convert the search name to lowercase

  return this.items.find(item => item.name.toLowerCase() === lowercaseName);
}


// getDataObservable(): Observable<Items | undefined> {
// return this.singleitem.asObservable();
// }


// setData(data: Items |undefined): void {

//   this.singleitem=data;
//   // console.log(this.singleitem);
// }
getSingleItem():Items|undefined{
// console.log(this.singleitem?.name);
return this.singleitem;

}
}