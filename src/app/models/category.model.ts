import { Package } from "./package.model";
import { Product } from "./product.model";

export interface Category {
    id:number
    name:string;
    image:string;
    package_type_country_id:number
    icon:string
    has_category:boolean;
    ads:number
    category:Category
    banner:string
    is_color:number
    is_size:number
    properties:[]
    is_online:number,
    products:any
    package:Package
    phone_code:string
    no_adds:any

}
