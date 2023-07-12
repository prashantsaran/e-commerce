import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/service/items.service';
import { Credentials } from 'src/app/interface/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  authentication: boolean = false;
 

  // Array to store credentials
  credential: Credentials[] = [];
  user: Credentials = {} as Credentials;

  // Form group for the login form
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z]+$')])
  });

  // Inject the ItemsService
  itemsService: ItemsService = inject(ItemsService);

  constructor(private router: Router) {}

  // Getters for form controls
  get userName() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    // Fetch credentials from the ItemsService
    this.itemsService.getCredentials().subscribe((data) => {
      this.credential = data;
    });
  }

  // Method to handle user login
  loginUser() {


    const body = {
      user: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    let isValid = false;
    this.credential.forEach(res => {
      // Check if the entered credentials match any stored credentials
      if (res.userName === body.user && res.password === body.password) {
        isValid = true;
        this.itemsService.name = res.name;
      }
    });

    if (isValid) {
      // Set validLogin property in ItemsService to true
      this.itemsService.validLogin = true;

      // Redirect to the home page
      this.router.navigate(['/home']);
    } else {
      // Invalid login, show error message
      this.authentication = false;
 

      // Set validLogin property in ItemsService to false
      this.itemsService.validLogin = false;
    }
  }
}
