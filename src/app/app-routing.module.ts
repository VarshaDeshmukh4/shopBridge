import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailspageComponent } from './detailspage/detailspage.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'details/:id', component: DetailspageComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
