import { option } from "./options.model";
import { type } from "./type.model";

export interface properity{
    id:number
    name:string
    type:type
    type_id:number
    options:option[]
    
}