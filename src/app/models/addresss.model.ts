import { City } from "./city.model";
export interface Address {

    id:number;
    address:string;
    name:string;
    street:string;
    floor:string;
    building: string;
    apartment: string,
    landmark:string,
    mobile: string,
    phone: string,
    lat:number,
    long:number
    city:City
    image:string
    is_default:number
}
