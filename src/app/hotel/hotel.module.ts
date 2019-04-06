import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import {HotelComponent} from './hotel.component';
import { HotelRoutingModule } from './hotel.routing';
import { HttpClientModule } from '@angular/common/http';
import {HotelService} from '.././services/hotel-service';
@NgModule({
  declarations: [HotelListComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    HttpClientModule
  ],
  providers:[HotelService]
})
export class HotelModule { }
