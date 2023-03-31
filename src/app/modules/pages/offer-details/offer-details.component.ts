import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../service/products.service';
import { UserService } from '../../../service/user.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
// Import from library
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker
} from '@costlydeveloper/ngx-awesome-popup';
import { GoToLoginComponent } from '../../../components/go-to-login/go-to-login.component';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  id:any
  data:any
  center:google.maps.LatLngLiteral = {
    lat: 24,
        lng: 12
  }
  zoom = 12;
  offersComments:any
  userData:any

  constructor(
    private activateRoute:ActivatedRoute,
    private productsService:ProductsService,
    private userService:UserService,
    private toastEvokeService: ToastEvokeService
    ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
   }

   getOfferData(){
    this.productsService.getOffer(this.id).subscribe((res:any)=>{
      this.data = res.Response
      this.center = {
        lat:res?.Response?.lat,
        lng:res?.Response?.long
      }
      // console.log(this.center);

      console.log(res);
    },(error:any)=>{
      console.log(error);
    })
   }
   getOffersComments(){
    this.productsService.getOffersComments(this.id).subscribe((res:any)=>{
      // console.log(res);
      this.offersComments = res.Response
    },(error:any)=>{
      console.log(error);
    })
   }

   addOfferComment(comment:any){
    this.productsService.addOfferComment({
      offer_id:this.id,
      comment:comment.value
    }).subscribe((res:any)=>{
      // console.log(res);
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        this.getOffersComments()
      }

      comment.value = ''
    },(error)=>{console.log(error);})
   }

   getUserData(){
    this.userService.getUserData().subscribe((res:any)=>{
      // console.log(res);
      this.userData = res.Response
    },(error)=>{console.log(error);})
  }

  deleteComment(id:any){
    this.productsService.deleteOfferComment({
      id
    }).subscribe((res:any)=>{
      // console.log(res);
      this.getOffersComments()
    },(error)=>{console.log(error);})
  }

  copyUrl(){
    navigator.clipboard.writeText(window.location.href);
    this.toastEvokeService.info('Clipboard', 'Done Copy In Clipboard').subscribe();
  }

  likeAndDislike(){
    this.productsService.likeOffer({
      offer_id:this.id
    }).subscribe((res:any)=>{
      console.log(res);
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        this.data.is_like = !this.data.is_like
      }
    },(error)=>{console.log(error);})
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

  ngOnInit(): void {
    this.getOfferData()
    this.getOffersComments()
    this.getUserData()

  }

}
