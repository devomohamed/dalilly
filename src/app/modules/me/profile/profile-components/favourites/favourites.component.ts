import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Favourite } from 'src/app/models/favourite.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  flag=0
response!:any
favourites!:Favourite[]
categories!:Category[]
  constructor(private favouritesserve:UserService) { }

  ngOnInit(): void {
    this.favouritesserve.favourite().subscribe((res)=>{this.response=res
      this.favourites=this.response.Response.data
      console.log(this.favourites[0].category)
        
     
    })
  }
  shrink(){
    this.flag=0
      }
     spread(){
        this.flag=1
          }
    

}
