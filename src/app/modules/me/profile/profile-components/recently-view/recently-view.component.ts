import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-recently-view',
  templateUrl: './recently-view.component.html',
  styleUrls: ['./recently-view.component.scss']
})
export class RecentlyViewComponent implements OnInit {
response!:any
views:any
  constructor(private recentview:UserService) { }

  ngOnInit(): void {
   this.recentview.recently_view().subscribe((res)=>{this.response=res;this.views=this.response.Response.data;console.log(res)})
  }

}
