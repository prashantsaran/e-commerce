import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  uName:string="Prashant";
  pass:string="password";
  authentication: boolean=false ;
  visibility:boolean=false;
  


  loginForm = new FormGroup({
  
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('[a-zA-z]+$')])
  });
  
 
  constructor(private router:Router){
   
  }
  

  get userName() {
    return this.loginForm.get('username');
  }
 
  get password() {
    return this.loginForm.get('password');
  }
 

  loginUser(username:string,pasword:string) {
    console.log("login button clicked");
    this.visibility=true;
    console.log(this.loginForm.value);
   
    if(username===this.uName && pasword===this.pass){
  console.log("validated")
      this.router.navigate(['/home'])

    }
    else{
      this.authentication=false;
      this.visibility=true;
    }
    console.log(this.uName , this.pass);

  }
}
