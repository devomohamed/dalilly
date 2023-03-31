import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { MessagesComponent } from '../../modules/pages/messages/messages.component';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss']
})
export class ChatUserComponent implements OnInit,AfterViewChecked {

  constructor(
    private chatService:ChatService,
    private userService:UserService,
    private activateRoute:ActivatedRoute,
    private router:Router,
    private messegeComp:MessagesComponent
    ) {}
  requestObj:any
  chat:any
  userData:any
  message:any
  chatImage:any
  chatName:any
  chatRecently:any
  product:any
  imgFile:any
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  changePhoto(event:any){
    this.imgFile = event.target.files[0]
    console.log(event.target.files[0]);
  }

  getChat(data:any){
    this.product = undefined
    this.chatService.getChat(data).subscribe((res:any)=>{

      let ch = res.Response.messages.data[0]
      // console.log(ch.seen_date);

      this.chatRecently = ch?.seen_date || ' '
      this.chat = res.Response.messages.data.reverse()
      if(ch?.is_admin == 0){
        if(ch?.store_id == 0 || ch?.store_id == undefined){
          if(ch?.receiver?.id != this.userData?.id){
            console.log(ch.receiver.name);

            this.chatName = ch.receiver?.name + ' ' + ch?.receiver.s_name
            this.chatImage = 'https://dalilisouq.com/' + ch.receiver.image
          }else{
            console.log(ch.receiver.name);
            this.chatName = ch.sender?.name + ' ' + ch?.sender.s_name
            this.chatImage = 'https://dalilisouq.com/' + ch.sender.image
          }
          if(ch.product.id == undefined){
            console.log('user');
          }else{
            console.log('User > product');
            this.product = ch.product
          }

        }else{
          // console.log('Store');
          this.chatName = ch.store.name
          this.chatImage = 'https://dalilisouq.com/' + ch.store.image
          if(ch.product.id == undefined){
            console.log('store');
          }else{
            console.log('store > product');
            this.product = ch.product
          }
        }
      }else{
        console.log('admin');
        this.chatImage = '../../../assets/images/logo.png'
        this.chatName = 'Dalili Souq Admin'
      }
      // console.log(res.Response);
    },(error:any)=>{
      console.log(error);
    })
  }

  getUserData(){
    this.userService.getUserData().subscribe((res:any)=>{
      // console.log(res);
      this.userData = res.Response
    },(error)=>{console.log(error);})
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }




  sendMessage(message:any){
    this.scrollToBottom();
    let myobj = {
      message:message.value || undefined,
      is_company:this.requestObj.is_company,
      image:this.imgFile || undefined,
      receiver_id:this.requestObj.user_id,
      is_admin: this.requestObj.user_id == 0 ? 1: undefined,
      product_id:this.requestObj.product_id,
      store_id:this.requestObj.store_id
    }
    this.chatService.sendMessage(myobj).subscribe((res:any)=>{
      console.log(res);
      this.messegeComp.getChat()
      // res.Response.sender.id = this.userData.id
      this.handleMessageAddFront(res.Response)
      message.value = ''
      this.imgFile = undefined
    },(error)=>{console.log(error);})
    console.log(message.value);
  }

  handleMessageAddFront(message:any){
    this.chat.push(message)
  }

  deleteMessage(message_id:any){
    this.chatService.RemoveMessage({message_id}).subscribe((res:any)=>{
      console.log(res);
      this.getChat(this.requestObj)
    },(error)=>{console.log(error);})
  }

  deleteAllChats(){
    this.chatService.deleteAllChats().subscribe((res:any)=>{
      console.log(res);
      this.getChat(this.requestObj)
      this.messegeComp.getChat()
      this.router.navigate(['/messages'])
    },(error)=>{console.log(error);})
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.getUserData()
    this.activateRoute.queryParams.subscribe((qp:any)=>{
      this.requestObj = {
        user_id:parseInt(qp.receiver) == -1 ? 0:parseInt(qp.receiver),
        store_id:parseInt(qp.storeId) == -1 ? undefined:parseInt(qp.storeId),
        product_id:parseInt(qp.product) == -1 ? undefined:parseInt(qp.product),
        is_company:0
      }
      this.getChat(this.requestObj)
    })
  }

}
