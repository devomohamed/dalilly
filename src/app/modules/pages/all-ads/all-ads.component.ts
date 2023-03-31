import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { CategoryService } from '../../../service/category.service';
import { AllAdsService } from '../../../service/all-ads.service';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {
  items:any;
  categories:any
  isSub:boolean = false
  subCategories:any
  subSubCategories:any
  filterSetting:object = {}
  catData:any
  subSelected:any = -1
  subSubSelected:any = -1
  selectedCat: {id: any} | -1 = -1;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService:ProductsService,
    private categoryServies:CategoryService,
    private allAds:AllAdsService
    ){}

  getCategories(){
    this.categoryServies.all().subscribe((res:any)=>{
      // this.categoriesCopy = res.Response
      this.categories = res.Response
      this.categories.map((el:any)=>{
        el.name = el.name.split(' ')[0]
      });

    })
  }

  changeCat(catId:any){
    // console.log(catId);
    this.subSelected = -1
    this.subSubSelected = -1
    if(catId == -1){
      this.catData = false
    }else{
      this.catData = true
      this.getSubCategories(catId)
    }
    this.isSub = false
    this.selectedCat = catId
    this.getData()
  }

  getSubCategories(id:any){
    this.categoryServies.sub_categories(id).subscribe((res:any)=>{
      this.subCategories = res.Response
      this.subCategories.map((el:any)=>{
        el.name = el.name.split(' ')[0]
      });
      // console.log(res);
    })
  }

  changeSub(mySub:any){
    console.log(mySub);
    this.subSubSelected = -1
    if(mySub.hasCat){
      this.isSub = true
      this.getSubSubCategories(mySub.id)
    }else{
      this.isSub = false
    }
    this.subSelected = mySub.id
    this.getData()
  }

  getSubSubCategories(id:any){
    this.categoryServies.sub_categories(id).subscribe((res:any)=>{
      this.subSubCategories = res.Response
      this.subSubCategories.map((el:any)=>{
        el.name = el.name.split(' ')[0]
      });
      // console.log(res);
    })
  }

  changeSubSub(id:any){
    // console.log(id);
    this.subSubSelected = id
    this.getData()
  }





  getSelectedData(){
    this.getCategories()
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['subSubId']){
        this.catData = true
        this.isSub = true
        this.getSubCategories(params['catId'])
        this.getSubSubCategories(params['subId'])
        this.subSubSelected = params['subSubId']
        this.subSelected = params['subId']
        this.selectedCat = params['catId']
        // console.log('If level 1');
      }else{
        // console.log('else level 1');
        if(params['subId']){
          // console.log('If level 2');
          this.catData = true
          this.getSubCategories(params['catId'])
          this.subSelected = params['subId']
          this.selectedCat = params['catId']
          return;
        }else if(params['catId']){
          if(params['catId'] != -1){
            console.log('else If level 2');
          this.catData = true
          this.isSub = false
          this.selectedCat = params['catId']
         this.getSubCategories(params['catId'])
          }else{
            this.selectedCat = -1
          }
        }
      }
      });
      this.getData()
  }


  getData(){
    if(this.subSubSelected == -1){
      if(this.subSelected == -1){
        if(this.selectedCat == -1){
          this.allAds.filter({...this.filterSetting})
        }else{
          this.allAds.filter({
            categories:[+this.selectedCat],
            ...this.filterSetting
          })
        }
      }else{
        this.allAds.filter({
          categories:[+this.subSelected],
          ...this.filterSetting
        })
      }
    }else{
      this.allAds.filter({
        categories:[+this.subSubSelected],
        ...this.filterSetting
      })
    }
  }

  handleReq(event:object){
    // console.log(event);
    this.filterSetting = event
    this.getData()
  }





  ngOnInit(): void {
    // this.getproducts()
    this.getSelectedData()
      }
}
