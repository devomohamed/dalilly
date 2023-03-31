import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogBelonging} from '@costlydeveloper/ngx-awesome-popup';
import { ChatService } from '../../service/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-chat',
  templateUrl: './start-chat.component.html',
  styleUrls: ['./start-chat.component.scss']
})
export class StartChatComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  imgFile:any
  msg:any

  constructor(
    @Inject('dialogBelonging') public dialogBelonging: DialogBelonging,
    private chatService:ChatService,
    private router:Router
  ) { }

  changePhoto(event:any){
    this.imgFile = event.target.files[0]
    console.log(event.target.files[0]);
  }

  changeText(event:any){
    this.msg = event.target.value
    console.log(event.target.value);
  }

  sendMessage(userID:any,storeId:any,productId:any){
    this.chatService.sendMessage({
      is_company:0,
      receiver_id:userID,
      store_id:storeId == -1?undefined:storeId,
      product_id:productId == -1?undefined:productId,
      message:this.msg || undefined,
      image:this.imgFile || undefined
    }).subscribe((res:any)=>{
      console.log(res);

      let objQuery = {
        receiver:userID,
        storeId:storeId || -1,
        product:parseInt(productId) || -1,
        admin:0
      }

      this.router.navigate(['/messages',parseInt(userID)], { queryParams: objQuery})

      console.log(objQuery);

    },(error:any)=>{console.log(error);
    })
  }

  ngOnInit(): void {
     // Check received data and other available features.
     console.log(this.dialogBelonging);

     // Subscribe to button listeners.
     this.subscriptions.add(
         // IDialogEventsController
         this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
             if (_Button.ID === 'edit') {

                 // Do some logic for example edit user.
             } else if (_Button.ID === 'submit') {
                  this.sendMessage(
                    this.dialogBelonging.customData.userId,
                    this.dialogBelonging.customData.storeId,
                    this.dialogBelonging.customData.productId
                    )
                 // Do some logic and close popup.
                 this.dialogBelonging.eventsController.close();
             }
             else if (_Button.ID === 'cancel') {

                 // Do some logic and close popup.
                 this.dialogBelonging.eventsController.close();
             }
         })
     );

     // Timeout emulates async data.
     setTimeout(() => {
         // Close the loader after some data is ready.
         // IDialogEventsController
         this.dialogBelonging.eventsController.closeLoader();
     }, 1000);
  }

  ngOnDestroy(): void {
    // Care about memory and close all subscriptions.
    this.subscriptions.unsubscribe();
}

}
