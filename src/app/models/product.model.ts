

 import{City} from './city.model'
 import{User} from './user.model'
 import{Category} from './category.model'
import { Store } from './store.model'
import { properity } from './properity.model'
import { Color } from './color.model'

 export interface  Product  {
   [x: string]: any
     id:number
    
     price?:number
     image:string
     quantity?:number
     city?:City
     seller?:User
     calls:number
     chats:number
     viewers:number
     offers:number
    // created_at:Date
     online_for:number
     expire_in:number
     favourite:boolean
     category?:Category
     comments:number
     is_complete:boolean
     created_at:string
     customer_note?:any
     rate:number
     store?:Store
     title:string
     desc:string
     link?:string
    lat?:number
    lng?:number
    edit?:number

    mobile?:number
    store_name:string
    store_id?:number
    category_name:any[]
    category_ids:any[]
    properties?:any[]
    colors?:Color[]
    is_color?:number
    is_size?:number
    is_online?:number
    note?:string
    update:number
    update2:number
    defaultimage?:number
    /////////////////////variables used in add store///////////
    f?:string
    y?:string
    t?:string
    i?:string
    name:string
    cover?:string
   city_id?:number
   city_name?:string
   region_id?:number
   region_name?:string
    add?:string
    store_flag?:number
    category_id?:number
    category_store_name?:string
    store_img?:object
    ///////////////////////////////////keys used in add offer///
    offer_flag?:number
    product_flag?:number
    imgs?:any
    routation?:number
 }
 