import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
response!:any
followers!:User[]
status!:any
action?:string
  constructor(private followersserve:UserService) { }

  ngOnInit(): void {
    
    this.followersserve.follwers().subscribe((res)=>{this.response=res;this.followers=this.response.Response
     console.log(this.followers)})
    }
  // isOdd(num:number) {
  //   if(num % 2 === 0) return false;
  //   return true;
  // }
  follow(id:number){
    
   this.followersserve.follow(id).subscribe((res)=>{
     this.status=res
     this.action=this.status?.Error.desc
     window.location.reload();
   },(err)=>{})
  }

}
