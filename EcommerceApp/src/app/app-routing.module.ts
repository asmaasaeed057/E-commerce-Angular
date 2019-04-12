import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishListCounterComponent } from './components/wish-list-counter/wish-list-counter.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

const routes: Routes = [
  {path:'home' ,component:HomePageComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'wishlistcounter' , component:WishListCounterComponent},
  {path:'nav' , component:NavBarComponent},
  {path:'footer' , component:FooterComponent},
  {path:'product/:id' , component:SinglePageComponent},
  {path:'cart' ,component:CartPageComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


