import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-buy-online',
  templateUrl: './buy-online.component.html',
  styleUrls: ['./buy-online.component.scss']
})
export class BuyOnlineComponent implements OnInit , AfterViewInit  {

  categories:any
  title:string = 'all'
  categorySelectedId:number = -1
  apiIdChoice:any
  subCategorySelected:any
  allProducts:any
  domain:string = "https://dalilisouq.com/"

  constructor(private categoryServies:CategoryService,private productService:ProductsService) { }


  getSubCategories(){
    this.categoryServies.getCategoriesOnline().subscribe((res:any)=>{
      this.categories = res.Response
      // console.log(this.categories);
      this.checkAllChAndCategory()
      // console.log(res.Response);
    })
  }

  checkAllChAndCategory(){
    if(this.categorySelectedId != -1){
      this.subCategorySelected = this.categories[this.categorySelectedId].categories
    }else{
      this.getAllProducts()

    }
  }

  getAllProducts(){
    this.productService.getProductByFormData({
      categories:[],
      is_online:true,
      country_id:localStorage.getItem('country_id')
    }).subscribe((res:any)=>{
      // console.log(res);
      this.allProducts = res.Response.products.data
    },(error)=>{console.log(error);
    })
  }

  changeSub(id:number){
    this.categorySelectedId = id
    if(id != -1){
      this.subCategorySelected = this.categories[this.categorySelectedId].categories
    }
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.getSubCategories()
  }

}
