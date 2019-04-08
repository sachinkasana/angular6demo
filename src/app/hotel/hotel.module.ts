import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import {HotelComponent} from './hotel.component';
import { HotelRoutingModule } from './hotel.routing';
import { HttpClientModule } from '@angular/common/http';
import {HotelService} from '.././services/hotel-service';
import {FilterPipe} from '.././pipe/hotel-pipe';

@NgModule({
  declarations: [HotelListComponent,FilterPipe],
  imports: [
    CommonModule,
    HotelRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[HotelService]
})
export class HotelModule { }
