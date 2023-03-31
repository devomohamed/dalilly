import { User } from "./user.model";

export interface Message{
    message:string,
    image:string,
    sender_id:number,
    created_at:string,
    sender:User
    reciever:User

}