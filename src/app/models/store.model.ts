import { City } from "./city.model";
import { Product } from "./product.model";
import { User } from "./user.model";

export interface Store {
    offline_note:string
    note:string
    id:number
    name:string;
    s_name:string
    image:string;
    bg:string;
    no_views:number;
    no_adds:number;
    rate:number;
    user:User;
    city:City;
    is_follow:number;
    no_followings:number,
    followers_count:number
    no_follows:number,
    sales_count:number
    address:string
    products:Product[]
    mobile:number
    delivery_price:number
    speed_fees:number
    total_user:number
    longitude:number
    latitude:number

    

}
