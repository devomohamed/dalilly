import { Component, Input, OnInit } from '@angular/core';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { ProductsService } from '../../service/products.service';
import { GoToLoginComponent } from '../go-to-login/go-to-login.component';
// Import from library
import {
  DialogLayoutDisplay,
  DialogInitializer,
  ButtonLayoutDisplay,
  ButtonMaker
} from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offerData:any

  constructor(private toastEvokeService: ToastEvokeService,private productsService:ProductsService) { }
  copyUrl(){
    navigator.clipboard.writeText(window.location.href);
    this.toastEvokeService.info('Clipboard', 'Done Copy In Clipboard').subscribe();
  }
  likeAndDislike(){
    this.productsService.likeOffer({
      offer_id:this.offerData.id
    }).subscribe((res:any)=>{
      console.log(res);
      if(res.Error.code == 401){
        this.goToLoGin()
      }else{
        this.offerData.is_like = !this.offerData.is_like
      }
    },(error)=>{console.log(error);})
  }

  goToLoGin() {

    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(GoToLoginComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard'}); // optional

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
    console.log(this.offerData);

  }

}
