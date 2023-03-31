import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { LocationsInformationService } from '../../../service/locations-information.service'

@Component({
  selector: 'app-following-products',
  templateUrl: './following-products.component.html',
  styleUrls: ['./following-products.component.scss']
})
export class FollowingProductsComponent implements OnInit {

  colorsSelected:string[] = ["#FFACC7","#4E6C50","#BCE29E"]
  products:any
  cities:any
  currentPage:number = 1
  city:number = 1

  constructor(private product:ProductsService,private locations:LocationsInformationService) { }

  counter(i: number) {
    return new Array(i);
}

  getProducts(){
    this.product.getProductsByFollow({city:this.city,page:this.currentPage}).subscribe((res:any)=>{
      // console.log(res);
      this.products = res.Response
    },(error:any)=>{console.log(error);
    })
  }

  getCities(){
    this.locations.getCountries().subscribe((res:any)=>{
      // console.log(res);
      this.cities = res.Response
    },(error:any)=>{console.log(error);
    })
  }

  nextPage(){
    if(this.currentPage < this.products.last_page){
      this.currentPage += 1
      // console.log('next if',this.currentPage);
      this.getProducts()
    }else{
      // console.log('next else',this.currentPage);
    }
  }

  previousPage(){
    if(this.currentPage > 1){
      this.currentPage -= 1
      // console.log('prev if',this.currentPage);
      this.getProducts()
    }
  }

  changePage(i:any){
    this.currentPage = i
    // console.log('change if',this.currentPage);
    this.getProducts()
  }

  ngOnInit(): void {
    this.getProducts()
    this.getCities()
  }


}
