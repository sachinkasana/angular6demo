import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel-service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor(private _hotelService: HotelService) { }

  hotelsList = [];
  hotelFilter = {
    hotelName: '',
    location: ''
  }

  ngOnInit() {
    this._hotelService.getHotelsList().subscribe(res => {
      this.hotelsList = res;
      console.log('res', res);
    })
  }
  

  searchHotels() {
    console.log('search',this.hotelFilter);
    this.hotelsList= this.hotelsList.filter((hotel)=>{
      debugger
     return hotel.name.toLowerCase()==this.hotelFilter.hotelName.toLowerCase()
            || this.hotelFilter.location.toLowerCase()==hotel.Addrees.toLowerCase();
    })
  }

}
