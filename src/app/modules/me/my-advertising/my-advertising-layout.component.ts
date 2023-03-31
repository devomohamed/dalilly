import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-advertising-layout',
  templateUrl: './my-advertising-layout.component.html',
  styleUrls: ['./my-advertising-layout.component.scss']
})
export class MyAdvertisingLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   // this.router.navigateByUrl('/me/my-advertising/active-ads')
  }

}
