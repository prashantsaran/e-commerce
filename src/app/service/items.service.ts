import { Injectable } from '@angular/core';
import { Items } from '../interface/items';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../interface/credentials';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  credentials: Credentials[] = [];

  // Method to set the credentials
  setCredential(credentials: Credentials[]) {
    this.credentials = credentials;
    console.log("setCredentials", credentials);
  }

  singleitem: Items = {} as Items;
  cart: Items[] = [];
  itemList: Items[] = [];
  name: string = "";
  validLogin: boolean;

  constructor(private http: HttpClient) {
    this.validLogin = false;

    // Fetch data from the server
    this.getData().subscribe((data) => {
      console.warn("data", data);
      this.itemList = data;
    })
  }

  // Method to add an item to the cart
  addItem(item: Items): void {
    this.cart.push(item);
  }

  // Method to fetch data from the server
  getData(): Observable<Items[]> {
    return this.http.get<Items[]>('http://localhost:8080/items');
  }

  // Method to fetch credentials from the server
  getCredentials(): Observable<Credentials[]> {
    return this.http.get<Credentials[]>('http://localhost:8080/Credentials');
  }

  // Method to get all items in the cart
  getAllCarts(): Items[] {
    return this.cart;
  }

  // Method to post data to the server
  postData(url: string, data: Credentials) {
    console.log(data);
    return this.http.post(url, data);
  }

  // Method to make a GET request to fetch credentials from the server
  getRequest(): Observable<Credentials[]> {
    return this.http.get<Credentials[]>('http://localhost:8080/Credentials');
  }

  // Method to search an item by name
  searchItemByName(name: string): Items | undefined {
    const lowercaseName = name.toLowerCase(); // Convert the search name to lowercase

    return this.itemList.find((item: { name: string; }) => item.name.toLowerCase() === lowercaseName);
  }

  // Method to get the single item
  getSingleItem(): Items {
    return this.singleitem;
  }
}
