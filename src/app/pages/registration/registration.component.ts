import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from 'src/app/service/items.service';
import { Credentials } from 'src/app/interface/credentials';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // Array to store credentials
  cred: Credentials[] = [];
  data: Credentials = {} as Credentials;

  // Inject the ItemsService
  itemsService: ItemsService = inject(ItemsService);
  
  // URL for the registration endpoint
  url: string = 'http://localhost:8080/Credentials';

  constructor(private router: Router, private http: HttpClient) {}

  // Form group for the registration form
  RegistrationForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  registration(): void {
    // Retrieve values from the registration form
    this.data.email = this.RegistrationForm.value.email!;
    this.data.name = this.RegistrationForm.value.name!;
    this.data.userName = this.RegistrationForm.value.username!;
    this.data.password = this.RegistrationForm.value.password!;

    // Make a POST request to the registration endpoint
    this.itemsService.postData(this.url, this.data).subscribe(result => {



      // Make a GET request to fetch the updated credentials
      this.itemsService.getRequest().subscribe((response) => {

       

        // Redirect to the home page
        this.router.navigate(['']);
      });
    });
  }
}
