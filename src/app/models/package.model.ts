import { price } from "./price.model";
import { type } from "./type.model";

    
export interface Package{
    id:number
    name:string
    price:number
    ads:number
    description:string
    days:number
    product_days:number,
    special_product_days:number
    balance:number
    view:number
    types:any[]
    views:number
    ////////////
points:number
}

