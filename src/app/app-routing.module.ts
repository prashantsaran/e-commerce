import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/home/main/main.component';
import { CartComponent } from './pages/home/cart/cart.component';
import { IteminfoComponent } from './pages/home/iteminfo/iteminfo.component';
import { SearchPageComponent } from './pages/home/search-page/search-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './pages/auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CartEmptyComponent } from './pages/home/cart-empty/cart-empty.component';


const routes: Routes = [
  
  {path:'',component: LoginComponent},
  
  {path:'home',canActivate:[AuthGuard], component:MainComponent,},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'iteminfo',canActivate:[AuthGuard],component:IteminfoComponent},
  {path: 'search-page',canActivate:[AuthGuard], component: SearchPageComponent},
  {path:'not-found',canActivate:[AuthGuard],component:NotFoundComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'cartEmpty',component:CartEmptyComponent},
  {path:'**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  
}
