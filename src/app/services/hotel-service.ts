import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IHotel } from '../interfaces/hotel-interface';
import { Observable } from 'rxjs';
 
@Injectable()
export class HotelService {
    constructor(private _http: HttpClient) {}

    getHotelsList():Observable<IHotel[]>{
        return this._http.get<IHotel[]>('../../assets/data.json');
    }
}