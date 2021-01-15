import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { DividaService } from './services/divida.service';

import { AppComponent } from './app.component';
import { DividaGridComponent } from './components/divida-grid/divida-grid.component';
import { AddDividaComponent } from './components/add-divida/add-divida.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, DividaGridComponent, AddDividaComponent, HeaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [DividaService, { provide: MAT_DATE_LOCALE, useValue: 'pt-br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
