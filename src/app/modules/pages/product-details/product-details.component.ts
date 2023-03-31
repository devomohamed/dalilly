import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../service/products.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
// Import from library
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker
} from '@costlydeveloper/ngx-awesome-popup';
import { ReportPopupComponent } from '../../../components/report-popup/report-popup.component';
import { UserService } from '../../../service/user.service';
import { GoToLoginComponent } from '../../../components/go-to-login/go-to-login.component';
import { ChatService } from '../../../service/chat.service';
import { StartChatComponent } from '../../../components/start-chat/start-chat.component';

SwiperCore.use([Autoplay])

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 15,
    spaceBetween: 20,
    navigation: true,
    loop:true,
    autoplay:{
      delay:3000
    },
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      576: {
        slidesPerView: 3,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      750: {
        slidesPerView: 4,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 5,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 6,
        // spaceBetween: 10
      }
    }
  };
  myThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg'
  myFullresImage = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg'
  config2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: false,
    scrollbar: { draggable: false },
    allowTouchMove: false,
    shortSwipes: false,
    slideToClickedSlide: false,
    preventClicksPropagation: false,
    preventClicks: false,
  };
  config3: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: true,
    scrollbar: { draggable: true },
  };

  productChecked:number = 0
  // colors:string[] = ["#F7A4A4","#FEBE8C","#B6E2A1","#C539B4"]
  colorSelectID:any
  id:any
  productDetails:any
  userData:any
  comments:any
  count:any = 1
  comment:any
  note:any = undefined
  sizes:any
  sizeSelected:any
  isLike:boolean = false
  center:google.maps.LatLngLiteral = {
    lat: 24,
        lng: 12
  }
  zoom = 12;
  imgFileComment:any
  currentRate = 5;
  storeId:any
  logCount(){
    console.log(this.count)
  }

  slideChange(e:any){
    console.log(e);

  }

  constructor(
    private productService:ProductsService,
    private toastEvokeService: ToastEvokeService,
    private userService:UserService,
    private activateRoute:ActivatedRoute,
    private router:Router,
    private chatService:ChatService
    ) {
    this.activateRoute.params.subscribe(parameter => {
      this.id = parameter.id
      this.sizeSelected = undefined
      this.colorSelectID = undefined
      this.sizes = undefined
      this.count = 1
      this.getProductDetails()
      this.getComments()
      this.getUserData()
    })
  }

  getChat(){
    console.log( 'TTTTTTTTTTTTTTTTTTTTTTT' +  this.storeId);

    this.chatService.getChat({
      product_id:this.id,
      user_id:this.productDetails.user_id,
      store_id: this.storeId == -1 ? undefined:this.storeId,
      is_company:0
    }).subscribe((res:any)=>{
      console.log(res);
      if(res.Response.messages.data.length > 0){
        console.log('Exssist Chat');
        this.router.navigate(['/messages',this.productDetails.user_id], { queryParams: {receiver: this.productDetails.user_id,storeId: this.storeId, product: this.id,admin: 0}})
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
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', userId:this.productDetails.user_id,storeId:this.storeId,productId:this.id}); // optional

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


  redirectByCat(cat:any){
    this.router.navigate(['/all-ads'], {queryParams: {catId:cat}})
  }
  redirectBySub(cat:any,sub:any){
    this.router.navigate(['/all-ads'], {queryParams: {catId:cat,subId:sub}})
  }
  redirectBySubSub(cat:any,sub:any,subSub:any){
    this.router.navigate(['/all-ads'], {queryParams: {catId:cat,subId:sub,subSubId:subSub}})
  }

  getProductDetails(){
    this.productService.getProductDetails(this.id).subscribe((res:any)=>{
      res.Response.properties.forEach((element:any) => {
        element.options = element.options.filter((ele:any) => {
          return ele?.selected == 1
        });
      });
      console.log(res.Response);
      this.productDetails = res.Response
      this.center = {
        lat:res?.Response?.latitude,
        lng:res?.Response?.longitude
      }
      this.isLike = res?.Response?.is_like
      this.count = Math.floor(res?.Response?.rate)
      this.currentRate = Math.floor(res?.Response?.rate)
      if(res?.Response.store_id != 0 || res?.Response.store_id != null){
        console.log('product');
        this.storeId = res?.Response.store_id
      }else{
        this.storeId = -1
        console.log('Store');
      }
      console.log(this.count);

    },(error:any)=>{console.log(error);
    })
  }

  getComments(){
    this.productService.getComments(this.id).subscribe((res:any)=>{
      console.log(res.Response);
      this.comments = res.Response
    },(error)=>{
      console.log(error);

    })
  }

  addToCart(){
    if(this.sizeSelected === undefined || this.colorSelectID === undefined || this.count <= 0){
      if(this.count <= 0){
        this.toastEvokeService.danger('Quantity', 'Please Select Valid Quantity >= 1').subscribe();
      }else if(this.colorSelectID === undefined){
        this.toastEvokeService.danger('Color', 'Please Select Color').subscribe();
      }else if(this.sizes.sizes.length != 0 && this.sizeSelected === undefined){
        this.toastEvokeService.danger('Size', 'Please Select Size').subscribe();
        console.log(this.sizes.sizes);

      }else{

        this.productService.addToCart({
          product_id:this.id,
          quantity:this.count <= 0? 1: this.count,
          note:this.note || undefined,
          size_id:this.sizeSelected || undefined,
          color_id:this.colorSelectID ||undefined
        }).subscribe((res:any)=>{
          if(res.Error.code == 401){
            this.goToLoGin()
          }else{
            this.toastEvokeService.success('Cart', 'Done Added').subscribe();
            this.productService.changesInCart()
          }

          console.log(res);
          // this.productDetails = res.Response
        },(error:any)=>{console.log(error);
        })

      }
    }else{
      console.log('wwww');

      this.productService.addToCart({
        product_id:this.id,
        quantity:this.count <= 0? 1: this.count,
        note:this.note,
        size_id:this.sizeSelected,
        color_id:this.colorSelectID
      }).subscribe((res:any)=>{
        if(res.Error.code == 401){
          this.goToLoGin()
        }else{
          this.toastEvokeService.success('Cart', 'Done Added').subscribe();
          this.productService.changesInCart()
        }

        console.log(res);
        // this.productDetails = res.Response
      },(error:any)=>{console.log(error);
      })
    }


  }
  move(event:any){


  }
  moveMap(event:any){
  }

  changeColor(id:any){
    this.colorSelectID = id
    this.sizeSelected = undefined
    this.changeAllSizesByColor(id)
  }

  changeAllSizesByColor(colorId:any){
    this.sizes = this.productDetails.colors_sizes.filter((ele:any)=>{
      return ele.color_id == colorId
    })
    this.sizes = this.sizes[0]
    console.log(this.sizes);

  }

  likeAndDisLike(){
    this.productService.likeProduct(this.id).subscribe((res:any)=>{
      console.log(res);
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        this.isLike = !this.isLike
      }

    },(error:any)=>{console.log(error);
    })
  }

  changePhoto(event:any){
    this.imgFileComment = event.target.files[0]
    console.log(event.target.files[0]);
  }


  commentProduct(comment:any,image:any){
    // console.log(this.id,this.comment);
    // console.log(image.value);


    if(comment.value == undefined || comment.value == ''){

    }else{
      this.productService.replayComment({
        product_id:this.id,
        comment:comment.value,
        image:this.imgFileComment
      }).subscribe((res:any)=>{
        console.log(res);
        if(res.Error.code == 401){
          this.goToLoGin()
        }else{
          this.getComments()
          comment.value = ''
          image.value = ''
          this.imgFileComment = undefined
        }

        // this.handleReplayFront(res.Response)

      },(error)=>{console.log(error);})
      // st


    }
  }

  changeComment(event:any){
    this.comment = event.target.value
  }

  // popup

  dataToExchange: { name: string; surname: string } = {
    name: 'Han',
    surname: 'Solo'
  };

  dialog() {

    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(ReportPopupComponent);

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
        new ButtonMaker('Submit', 'submit', ButtonLayoutDisplay.SUCCESS),
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        console.log('dialog response: ', resp);
    });
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

  // popup

  copyUrl(){
    navigator.clipboard.writeText(window.location.href);
    this.toastEvokeService.info('Clipboard', 'Done Copy In Clipboard').subscribe();
  }

  rateCountChange(e:any){
    this.productService.rateProduct({
      product_id:this.id,
      rate:e,
    }).subscribe((res:any)=>{
      // console.log(res);
      if(res.Error.status == true){
        this.getComments()
        this.toastEvokeService.info('Rate', res.Error.desc).subscribe();
      }else{
        if(res.Error.code == 401){
          this.goToLoGin()
        }
        // this.toastEvokeService.danger('Comment', `Fail To Add: ${res.Error.desc}`).subscribe();
      }

    },(error:any)=>{console.log(error);this.toastEvokeService.danger('I am title!', error).subscribe();
    })
  }

  replayComment(id:any,replay:any){
    this.productService.replayComment({
      product_id:this.id,
      comment_id:id,
      comment:replay.value
    }).subscribe((res:any)=>{
      // console.log(res.Response);
      // this.handleReplayFront(res.Response)
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        // this.getComments()
        console.log(res);
        res.Response.user = this.userData
        this.handleReplayFront(id,res.Response)
        replay.value = ''
      }
    },(error)=>{console.log(error);})

  }

  handleReplayFront(id:any,replay:any){
    // console.log(this.comments);

    this.comments.comments.forEach((element:any) => {
      if(id == element.id){
        element.replys.push(replay)
      }
    });
  }

  handleDeleteReplayFront(commentId:any,replayId:any){
    this.comments.comments.forEach((element:any) => {
      if(commentId == element.id){
        element.replys = element.replys.filter((rep:any) => rep.id != replayId);
      }
    });

  }

  deleteComment(id:any){
    // console.log(id);
    this.productService.deleteComment({
      id
    }).subscribe((res:any)=>{
      // console.log(res);
      this.getComments()
    },(error)=>{console.log(error);})
  }

  deleteReplay(commId:any,repId:any){
    // console.log(id);
    this.productService.deleteComment({
      id:repId
    }).subscribe((res:any)=>{
      console.log(res);
      // this.getComments()
      this.handleDeleteReplayFront(commId,repId)
    },(error)=>{console.log(error);})
  }
  getUserData(){
    this.userService.getUserData().subscribe((res:any)=>{
      console.log(res);
      this.userData = res.Response
    },(error)=>{console.log(error);})
  }

  ngOnInit(): void {

  }

}
