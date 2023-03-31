import { User } from "./user.model";

export interface notification{
    notification_id:number
    action:string
    sender:User
    is_seen:number
    is_open:number
    object_id:string
}