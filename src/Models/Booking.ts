import { BusDetail } from "./BusDetail"

export interface Booking{
    bookingid:number,
    busid:number,
    noofseats:number,
    totalfare:number,
    customerid:number,
    bookingdate:string,
    bookingstatus:boolean
    bus:BusDetail
}