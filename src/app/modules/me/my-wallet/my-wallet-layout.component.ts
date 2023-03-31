import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Point } from 'leaflet';
import { Points } from 'src/app/models/points.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-wallet-layout',
  templateUrl: './my-wallet-layout.component.html',
  styleUrls: ['./my-wallet-layout.component.scss']
})
export class MyWalletLayoutComponent implements OnInit {
  profile_data:any
  mypoints!:Points[]
  reward_response!:any
  constructor(private loginservice:UserService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.loginservice.profile({country_id:1
    }).subscribe((res)=>{
  this.profile_data=res
  console.log(res)



//  this.route.navigateByUrl('/me/profile/my-profile')
  })
  this.loginservice.reward_points().subscribe((res)=>{
    console.log(res)
    this.reward_response=res;this.mypoints=this.reward_response.Response})

  }
}
