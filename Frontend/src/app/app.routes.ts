import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartViewEditComponent } from './cart-view/cart-view-edit.component';





export const routes: Routes = [
   // {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path:'aboutus', component: AboutUsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cart',component: CartComponent},
    {path: '',component: CartViewComponent},
    {path: 'edit/:id',component:CartViewEditComponent},
    

];
