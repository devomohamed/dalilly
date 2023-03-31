import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  response!:any
  followings!:User[]
  stores!:User[]
  active: number = 1;
  status!:any
action?:string
  constructor(private followingsserve:UserService) { }

  ngOnInit(): void {
    this.followingsserve.follwing().subscribe((res)=>{console.log(res);this.response=res;this.followings=this.response.Response.users
    this.stores=this.response.Response.stores
    })
  }
  follow(id:number){
    
    this.followingsserve.follow(id).subscribe((res)=>{
      this.status=res
      this.action=this.status?.Error.desc
      window.location.reload();
    },(err)=>{})
   }

}
