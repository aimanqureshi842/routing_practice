import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './shared/component/user-dashboard/user-details/user-details.component';
import { UserFormComponent } from './shared/component/user-dashboard/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from './btn/btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductDetailsComponent } from './shared/component/products/product-details/product-details.component';
import { ProductFormComponent } from './shared/component/products/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDashboardComponent,
    HomeComponent,
    ProductsComponent,
    FairsComponent,
    UserDetailsComponent,
    UserFormComponent,
    BtnComponent,
    ProductDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
