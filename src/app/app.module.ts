import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailspageComponent } from './detailspage/detailspage.component';
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListPageComponent,
    DetailspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
