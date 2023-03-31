import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
enum UserTabs {
  Profile = "Profile",
  Ads = "Ads",
  Wallet = "Wallet",
  Settings = "Settings",
}
@Component({
  selector: 'app-me-layout',
  templateUrl: './me-layout.component.html',
  styleUrls: ['./me-layout.component.scss']
})
export class MeLayoutComponent implements OnInit {
  userTab: UserTabs = UserTabs.Profile;
  get UserTabs(): typeof UserTabs {
    return UserTabs;
  }
profile_data:any
  changeUserTab = (tab: UserTabs) => this.userTab = tab;

  constructor(private loginservice:UserService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.loginservice.profile({country_id:1    
    }).subscribe((res)=>{
  this.profile_data=res
  console.log(res)
  this.loginservice.id=this.profile_data.Response.id
  localStorage.setItem('lat',this.profile_data.Response.address.lat)
  localStorage.setItem('long',this.profile_data.Response.address.long)
  
 
//  this.route.navigateByUrl('/home/me/profile/my-profile')
  })


}
redirect(link:string){
  window.open(`http://${link}`, '_blank')
}
}
