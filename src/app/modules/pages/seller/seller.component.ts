import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { ProductsService } from '../../../service/products.service';
import { GoToLoginComponent } from '../../../components/go-to-login/go-to-login.component';
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker,
  ToastEvokeService
} from '@costlydeveloper/ngx-awesome-popup';
import { StartChatComponent } from '../../../components/start-chat/start-chat.component';
import { ChatService } from '../../../service/chat.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  colorsSelected:string[] = ["#FFACC7","#4E6C50","#BCE29E"]
  id:any
  userData:any
  products:any
  allProducts:any
  userProfileData:any

  constructor(
    private activateRoute:ActivatedRoute,
    private user:UserService,
    private product:ProductsService,
    private router:Router,
    private chatService:ChatService
    ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
  }

  ///////////////////////////
  getChat(){
    this.chatService.getChat({
      user_id:this.id,
      is_company:0
    }).subscribe((res:any)=>{
      console.log(res);
      if(res.Response.messages?.data.length > 0){
        console.log('Exssist Chat');
        this.router.navigate(['/messages',this.id], { queryParams: {receiver: this.id,storeId: -1, product: -1,admin: 0}})
      }else{
        this.startMessage()
        // console.log('Not Exssist Chat');

      }
    },(error:any)=>{})
  }

  startMessage(){
    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(StartChatComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', userId:this.id,storeId:-1,productId:-1}); // optional

    // Set some configuration.
    dialogPopup.setConfig({
        width     : '500px',
        layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
        // new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.WARNING),
        new ButtonMaker('Send', 'submit', ButtonLayoutDisplay.SUCCESS),
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        console.log('dialog response: ', resp);
    });
  }
  //////////////////////////





  getUserProfile(){
    this.user.getUserById(this.id).subscribe((res:any)=>{
      console.log(res);
      this.userData = res.Response
    },(error:any)=>{console.log(error);
    })
  }
  getUserData(){
    this.user.getUserData().subscribe((res:any)=>{
      console.log(res.Response);

      this.userProfileData = res.Response
      // console.log(this.userData);
    },(error:any)=>{console.log(error);
    })

   }
  getProducts(){
    this.product.getProductByFormData({
      users:[parseInt(this.id)],
      seller_type:1
    }).subscribe((res:any)=>{
      // console.log(res);
      this.products = res.Response.products.data
      this.allProducts = res.Response
    },(error:any)=>{console.log(error);
    })
  }


  // Popup
  goToLoGin() {

    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(GoToLoginComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', id:this.id}); // optional

    // Set some configuration.
    dialogPopup.setConfig({
        width     : '500px',
        layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
        // new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.WARNING),
        new ButtonMaker('Yes', 'submit', ButtonLayoutDisplay.SUCCESS),
        new ButtonMaker('No', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        // console.log('dialog response: ', resp);
    });
}
  // Popup

  followAndUnFollow(){
    this.user.follow(this.id).subscribe((res:any)=>{
      // console.log(res);
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        // this.storeData.is_follow == !this.storeData.is_follow
        if(this.userData.is_follow){
          this.userData.is_follow = false
        }else{
          this.userData.is_follow = true
        }
        // console.log(this.userData);

      }
    },(error:any)=>{console.log(error);
    })
  }

  searchProducts(keyword:any){
    let country_id = Number(JSON.parse(localStorage.getItem('country_id')||'1'))
    // console.log(keyword);

    if(keyword == ''){
      this.products = this.allProducts
    }else{
      this.product.getProducts({
        users:[this.id],
        country_id,
        keyword,
      }).subscribe((res:any)=>{
        // console.log(res);
        this.products = res.Response.products.data
      },(error:any)=>{console.log(error);
      })
    }
  }

  ngOnInit(): void {
    this.getUserProfile()
    this.getUserData()
    this.getProducts()
  }

}
