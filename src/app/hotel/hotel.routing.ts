import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

const routes: Routes = [
  {path: '', component: HotelListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }