import{City} from './city.model'
import{User} from './user.model'
import{Category} from './category.model'
export interface Favourite {
    id:number
    name:string
    price:number
    image:string
    quantity:number
    city:City
    seller:User
    calls:number
    chats:number
    created_at:string
    category:Category
    comments:number
}
