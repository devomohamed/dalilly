import { Component,Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})

export class AdvertisingComponent implements OnInit {
  @Input()
  ads!:Product
  constructor() { }

  ngOnInit(): void {
  }

}
