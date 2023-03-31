import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  // images:any = [ "pexels-artem-beliaikin-929245.jpg" , "" ]

  constructor(private productsService:ProductsService) { }

  offers:any

  getOffers(){
    this.productsService.getOffers().subscribe((res:any)=>{
      console.log(res.Response);
      this.offers = res.Response.data
    },(error:any)=>{
      console.log(error);
    })
  }


  ngOnInit(): void {
    this.getOffers()
  }

}
