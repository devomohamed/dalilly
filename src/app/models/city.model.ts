import { Country } from "./country.model";
import { Region } from "./region.model";
export interface City {
    id:number
    name:string
    country_id:number
    country:Country
    regions:Region[]
}
