    export interface IRoom {
        roomNo: number;
        Type: string;
        Charges_Per_Day: number;
        date_Of_Booking: string;
    }

    export interface IHotel {
        id: number;
        name: string;
        Addrees: string;
        Available_Rooms: number;
        isRoomAvailable: boolean;
        Rooms: IRoom[];
    }