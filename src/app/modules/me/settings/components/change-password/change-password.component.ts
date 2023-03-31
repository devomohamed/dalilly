import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
 curr_password?:string
  old_password?:string
  
    user!:any  
  constructor(private password:UserService) { }

  ngOnInit(): void {
  }
  change(){
    

    this.password.changepassword({password:this.curr_password,old_password:this.old_password}).subscribe((res)=>{
      console.log(res)
    })
  }


}
