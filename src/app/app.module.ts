import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrstionComponent } from './registrstion/registrstion.component';
import { CarsComponent } from './cars/cars.component';
import { PartsComponent } from './parts/parts.component';
import { StaffComponent } from './staff/staff.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrstionComponent,
    CarsComponent,
    PartsComponent,
    StaffComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
