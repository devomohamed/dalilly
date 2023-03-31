import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { notification } from 'src/app/models/notification.model';
import { UserService } from 'src/app/service/user.service';
import { LocationsInformationService } from '../../service/locations-information.service';
import { ProductsService } from '../../service/products.service';
import { SearchData } from '../../models/General/DataSearch';
import { AllAdsService } from '../../service/all-ads.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpened:boolean = false
  categories:any
  countries:any
  myCountry:any
  profileData:any
  ProfileImage:any
  // notifications:any
  notificationCount:any
  messages:any
  orders:any
  domain:string = "https://dalilisouq.com/"


  response!:any
  counter_noty=0
  counter_order=0
  counter_cart=0
  cities:any
  i!:notification
  notifications!:notification[]
  orders_notification!:notification[]
  cartItems:any
  DataSearch:SearchData = {
    keyword:'',
    category:-1,
    city:-1
  }


  constructor(
    private categoryServies:CategoryService,
    private userService:UserService,
    private route: Router,
    private notifserve:UserService,
    private locationsService:LocationsInformationService,
    private product:ProductsService,
    private allAds:AllAdsService
     ) { }


  getCategories(){
    this.categoryServies.all().subscribe((res:any)=>{
      this.categories = res.Response
    })
  }
  getCountries(){
    this.categoryServies.getCountries().subscribe((res:any)=>{
      this.countries = res.Response.countries
      this.getMyCountry()
    })
  }
  changeCountry(index:number,i:number){
    // console.log(index);
    localStorage.setItem('country_id',JSON.stringify(index))
    location.reload();
  }

  getMyCountry(){
    if(localStorage.getItem('country_id')){
      this.myCountry = this.countries.find((ele:any)=>ele.id == Number(JSON.parse(localStorage.getItem('country_id')||'1'))).image
    }else{
      localStorage.setItem('country_id', JSON.stringify(1))
      this.myCountry = '../../../assets/images/countries/16109894573637.png'
    }
  }

  getUserDataInfo(){
    this.userService.getUserData().subscribe((res:any)=>{
      this.profileData = res.Response
      this.ProfileImage = this.domain + res.Response.image
      // console.log(res);

    })
  }

  getNotifications(){
    this.userService.allnotification('offer').subscribe((res:any)=>{
        this.notifications = res.Response.data
        this.notificationCount = res.Response.data.length
        // console.log(this.notifications);
    })
  }

  changeLanguage(event:any){
    localStorage.setItem('lang ',event.target.value)
    // location.reload();
  }




  notification_offer(){
    this.notifserve.allnotification('offer').subscribe((res)=>{
      this.response=res
      this.notifications=this.response.Response.data
      if(this.notifications){
        for(this.i of this.notifications){
               if(this.i.is_open==0)
               this.counter_noty++
        }
      }

    })
   }
   notification_order(){
    this.notifserve.allnotification('order').subscribe((res)=>{
      this.response=res
      this.orders_notification=this.response.Response.data
      if(this.orders_notification){
        for(this.i of this.orders_notification){
               if(this.i.is_open==0)
               this.counter_order++
        }
      }

    })
   }
   set_as_open(id:number,is_open:number,order_id:string){
   if(is_open==0){
     this.notifserve.set_as_seen(id).subscribe((res)=>{console.log(res)})
   }
  //  if(order_id)
  console.log(order_id)
   this.route.navigateByUrl(`/home/me/profile/saledetailes/237`)
   }



   getCites(){
    this.locationsService.getCountries().subscribe((res:any)=>{
      this.cities = res.Response
    },(error:any)=>{
      console.log(error);

    })
   }

   getCartItems(){
    this.product.cart$.subscribe((res:any)=>{
      this.cartItems = res.Response
    },(error:any)=>{
      console.log(error);

    })
    this.product.changesInCart()
   }

   deleteProductFromCart(cart_id:any){
    this.product.deleteItemInCart({cart_id:cart_id}).subscribe((res:any)=>{
      // console.log(res);
      this.product.changesInCart()
    },(error:any)=>{console.log(error);
    })
   }



   search(){
    this.allAds.search(this.DataSearch)
    console.log(this.DataSearch);

    if(this.route.url !== '/all-ads'){
      this.route.navigate(['/all-ads'])
    }
   }





  ngOnInit(): void {
    this.getCategories()
    this.getCountries()
    this.getUserDataInfo()
    this.getNotifications()

    this.notification_offer()
    this.notification_order()

    this.getCites()
    this.getCartItems()

  }

}
