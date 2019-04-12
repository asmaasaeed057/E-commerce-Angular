import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
// import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { WishListCounterComponent } from './components/wish-list-counter/wish-list-counter.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/productService/products.service';
import { ComponentsComponent } from './components/components.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { InputComponent } from './components/input/input.component';
// import { SubmitComponent } from './components/submit/submit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SinglePageComponent,
   
    WishListCounterComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    ComponentsComponent,
    CartPageComponent,
    NotFoundComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
