import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
  user_data!:any
  profile_data!:any
  constructor(private profile:UserService,private cookieService: CookieService ) { }

  ngOnInit(): void {
    
    
    this.user_data= this.profile.getuser()
    
    this.profile.profile({country_id:1    
        }).subscribe((res)=>{
      this.profile_data=res
      console.log(res)
    })
   }

}
