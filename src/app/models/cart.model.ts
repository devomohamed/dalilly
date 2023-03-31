import { Cart_cart } from "./cart_cart.model";
import { Category } from "./category.model";
import { Product } from "./product.model";

export interface Cart {
    
    product:Product
    "total": number,
    quantites:number
    cart:Cart_cart[]
    times:any[]

}
