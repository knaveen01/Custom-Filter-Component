import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { AddressComponent } from './address.component';
import { CustomFilterComponent } from './ped-grid-filter/custom-filter/custom-filter.component';
import { PedGridFilterComponent } from './ped-grid-filter/ped-grid-filter.component';

@NgModule({
  declarations: [
    AppComponent,    
    PedGridFilterComponent,
    CustomFilterComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
