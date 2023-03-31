import { Category } from "./category.model";
import { Obj } from "./obj.model";
import { price } from "./price.model";

export interface Account{
   id:number
    ads:number
    all:number
    price:price
    remains:number
    obj:Obj
    cats:any
    payment_type:string
    expire_at:Date
    name:string
    days:number
    balance:number
    categories:Category[]

}
