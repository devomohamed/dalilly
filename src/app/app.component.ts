import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  browserRefresh!:boolean
  subscription: Subscription;

  constructor(private router: Router,private userserve:UserService) {
    this.subscription = router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.browserRefresh = !router.navigated;
          // console.log(this.browserRefresh)
        }
    });
  }
  ngOnInit(): void {
    if(this.browserRefresh==true)
    {this.userserve.refresh_token().subscribe((res)=>{})}
  }
}
