import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-followers',
  templateUrl: './store-followers.component.html',
  styleUrls: ['./store-followers.component.scss']
})
export class StoreFollowersComponent implements OnInit {
id!:number
response!:any
followers!:User[]
  constructor(private activeroute:ActivatedRoute,private followersservise:UserService) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.followersservise.followers(this.id).subscribe((res)=>{this.response=res;this.followers=this.response.Response})
  }

}
