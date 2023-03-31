import { Address } from "../models/addresss.model";
import { Category } from "./category.model";
import { City } from "./city.model";
import { Product } from "./product.model";
import { Store } from "./store.model";
import { User } from "./user.model";

export interface Order {
    id:number,
    f_name:string,
    s_name:string,
    address:Address,
    date:string,
    time:string
    mobile:string,
    total:number,
    created_at:string
    delivery_price:number,
    commission:number
    product:Product
    price:number
    quantity:number
    viewers:number
    image:string
    rate:number
    offers:number
    city:City
    seller:User
    details:any
    service_percent:number
    is_fast:number
    coupon_value:number
    comments:number
    category:Category
    status:number
    reward_points:number
    vat_amount:number
    service_amount:number
    is_complete:boolean
    stores:Store[]
    users:any[]
    driver:User[]
    name:string
    qr:string
    code:string
    total_price:number
    points_redeem:number
    products:any[]
    customer_note:string
    last_page:number
    payment_type:number
    
              
    
}
