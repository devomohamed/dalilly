import { City } from "./city.model";
import { Region } from "./region.model";
import { Store } from "./store.model";

export interface offer{
    id:number
    name:string
    desc:string
    expire_date:string
    image:string
    viewers:number
    is_active:number
    store:Store
    city:City
    region:Region
    likes:number
    created_at:string
}