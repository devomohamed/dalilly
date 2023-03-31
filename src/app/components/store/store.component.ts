import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../../models/store.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @Input() store!:Store
  url:string = "https://dalilisouq.com/"

  constructor() { }

  ngOnInit(): void {
  }

}
