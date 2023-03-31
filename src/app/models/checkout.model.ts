import { Product } from "./product.model";
import { Regions } from "./regions.model";
import { Store } from "./store.model";

export interface Checkout{
    stores:Store[],
   regions:any[],
   total:number,
   redeem_value:number
    "fast_days":string,
    fast_delivery:number
    total_fast:number,
    total_price:number,
    coupon_value:number,
    total_delivery:number
    balance_points:number
    note:string,
    vat_amount:number,
    service_amount:number,
    "redeem_points": number,
        "reward_points": number,
        "total_points": number,
      
}