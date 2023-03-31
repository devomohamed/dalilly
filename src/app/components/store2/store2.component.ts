import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store2',
  templateUrl: './store2.component.html',
  styleUrls: ['./store2.component.scss']
})
export class Store2Component implements OnInit {

  @Input() store:any

  constructor() { }

  ngOnInit(): void {
  }

}
