import { Router } from '@angular/router';
import { ChatService } from './../../../service/chat.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    private chat:ChatService,
    private userService:UserService,
    private router:Router
    ) {console.log(this.date); }
  data:any
  chatOpened:any
  date:Date = new Date()
  userData:any



  getChat(){
    this.chat.getMessages().subscribe((res:any)=>{
      console.log(res);
      this.data = res.Response.data
    },(error:any)=>{console.log(error);
    })
  }

  getUserData(){
    this.userService.getUserData().subscribe((res:any)=>{
      console.log(res);
      this.userData = res.Response
    },(error:any)=>{console.log(error);})
  }

  redirectToChat(user:any){
    console.log(user);
    if((user.store_id == 0 || user.store_id == null) && user.is_admin == 0){
      if(user.receiver.id == this.userData.id){
        //////////////////
        if(user.product.id != undefined){
          // console.log(`product >> user , userId: ${user.receiver.id} , productId: ${user.product.id}`);
          this.router.navigate(['/messages',user.sender.id], { queryParams: {receiver:user.sender.id,storeId: -1, product: user.product.id,admin: 0}})
        }else if(user.store_id == 0 || user.store_id == null){
          // console.log('user');
          this.router.navigate(['/messages',user.sender.id], { queryParams: {receiver:user.sender.id,storeId: -1, product: -1,admin: 0}})
        }
        /////////////////
      }else{
        if(user.product.id != undefined){
          // console.log(`product >> user , userId: ${user.receiver.id} , productId: ${user.product.id}`);
          this.router.navigate(['/messages',user.receiver.id], { queryParams: {receiver:user.receiver.id,storeId: -1, product: user.product.id,admin: 0}})
        }else if(user.store_id == 0 || user.store_id == null){
          // console.log('user');
          this.router.navigate(['/messages',user.receiver.id], { queryParams: {receiver:user.receiver.id,storeId: -1, product: -1,admin: 0}})
        }
      }
    }else if((user.store_id != 0) && user.is_admin == 0){
      if(user.store_id != 0 && user.product.id != undefined){
        // console.log(`product >> store , userId: ${user.receiver.id} , storeId: ${user.store.id} , productId: ${user.product.id}`);
        this.router.navigate(['/messages',user.receiver.id], { queryParams: {receiver:user.receiver.id,storeId: user.store.id, product: user.product.id,admin: 0}})
      }else{
        // console.log('store');
        this.router.navigate(['/messages',user.receiver.id], { queryParams: {receiver:user.receiver.id,storeId: user.store.id, product: -1,admin: 0}})
      }
    }else{
      // console.log('admin');
      this.router.navigate(['/messages',0], { queryParams: {receiver:-1,storeId: -1, product: -1,admin: 1}})
    }
    this.getChat()
  }

  ngOnInit(): void {
    this.getUserData()
    this.getChat()
  }

}
