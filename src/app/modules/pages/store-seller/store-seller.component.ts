import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../../service/store.service';
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker,
  ToastEvokeService
} from '@costlydeveloper/ngx-awesome-popup';
import { QrCodeComponent } from '../../../components/qr-code/qr-code.component';
import { AboutusPopupComponent } from '../../../components/aboutus-popup/aboutus-popup.component';
import { UserService } from '../../../service/user.service';
import { GoToLoginComponent } from '../../../components/go-to-login/go-to-login.component';
import { ProductsService } from '../../../service/products.service';
import { StartChatComponent } from '../../../components/start-chat/start-chat.component';
import { ChatService } from '../../../service/chat.service';

@Component({
  selector: 'app-store-seller',
  templateUrl: './store-seller.component.html',
  styleUrls: ['./store-seller.component.scss']
})
export class StoreSellerComponent implements OnInit , AfterViewInit {

  colorsSelected:string[] = ["#FFACC7","#4E6C50","#BCE29E"]
  id:any
  storeData:any
  userData:any
  products:any
  url:string = "https://dalilisouq.com/"
  constructor(
    private activateRoute:ActivatedRoute,
    private storeService:StoreService,
    private toastEvokeService: ToastEvokeService,
    private userService:UserService,
    private productService:ProductsService,
    private router:Router,
    private chatService:ChatService
    ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.getUserData()
   }

   ///////////////////////////
  getChat(){
    this.chatService.getChat({
      user_id:this.storeData.user_id,
      store_id:this.id,
      is_company:0
    }).subscribe((res:any)=>{
      console.log(res);
      if(res.Response.messages?.data.length > 0){
        console.log('Exssist Chat');
        this.router.navigate(['/messages',this.storeData.user_id], { queryParams: {receiver: this.storeData.user_id,storeId: this.id, product: -1,admin: 0}})
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
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', userId:this.storeData.user_id,storeId:this.id,productId:-1}); // optional

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


   getUserData(){
    this.userService.getUserData().subscribe((res:any)=>{
      // console.log(res);

      this.userData = res.Response
      // console.log(this.userData);
    },(error:any)=>{console.log(error);
    })

   }

  getstoreInfo(){
    this.storeService.storeInfo({
      storeId:this.id
    }).subscribe((res:any)=>{
      console.log(res);
      this.storeData = res.Response
    },(error)=>{console.log(error);
    })
  }

  getStore(){
    this.storeService.getStore({
      seller_type:2,
      stores:[parseInt(this.id)]
    }).subscribe((res:any)=>{
      console.log(res);
      this.products = res?.Response?.products?.data
    },(error:any)=>{
      console.log(error);
    })
  }

  qrCode(){
    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(QrCodeComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', id: 1}); // optional

    // Set some configuration.
    dialogPopup.setConfig({
        width     : '500px',
        layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        console.log('dialog response: ', resp);
    });
  }
  editStore(){
    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(QrCodeComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', id: 1}); // optional

    // Set some configuration.
    dialogPopup.setConfig({
        width     : '500px',
        layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        // console.log('dialog response: ', resp);
    });
  }

  // popup 2
  about() {

    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(AboutusPopupComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', id: 1, store: this.storeData}); // optional

    // Set some configuration.
    dialogPopup.setConfig({
        width     : '500px',
        layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        console.log('dialog response: ', resp);
    });
}

  // popup 2

  copyUrl(){
    navigator.clipboard.writeText(window.location.href);
    this.toastEvokeService.info('Clipboard', 'Done Copy In Clipboard').subscribe();
  }

  followAndUnFollow(){
    this.storeService.followAndUnFollowStore({
      store_id:this.id
    }).subscribe((res:any)=>{
      // console.log(res);
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        // this.storeData.is_follow == !this.storeData.is_follow
        if(this.storeData.is_follow){
          this.storeData.is_follow = false
        }else{
          this.storeData.is_follow = true
        }
        console.log(this.storeData);

      }
    },(error:any)=>{console.log(error);
    })
  }


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
        console.log('dialog response: ', resp);
    });
}

searchProducts(keyword:any){
  let country_id = Number(JSON.parse(localStorage.getItem('country_id')||'1'))
  // console.log(keyword);

  if(keyword == ''){
    this.products = this.storeData?.products?.data
  }else{
    this.productService.getProducts({
      stores:[this.id],
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

  }
  ngAfterViewInit(){
    this.getStore()
    this.getstoreInfo()
  }

}
