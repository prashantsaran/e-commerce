import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './pages/home/main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './pages/home/cart/cart.component';
import { IteminfoComponent } from './pages/home/iteminfo/iteminfo.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { SearchPageComponent } from './pages/home/search-page/search-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CartEmptyComponent } from './pages/home/cart-empty/cart-empty.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CartComponent,
    IteminfoComponent,
    NavbarComponent,
    SearchPageComponent,
    NotFoundComponent,
    RegistrationComponent,
    CartEmptyComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
