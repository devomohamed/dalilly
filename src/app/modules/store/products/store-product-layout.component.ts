import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-product-layout',
  templateUrl: './store-product-layout.component.html',
  styleUrls: ['./store-product-layout.component.scss']
})
export class StoreProductLayoutComponent implements OnInit {
id!:number
  constructor(private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
    console.log(this.id)
  }

}
