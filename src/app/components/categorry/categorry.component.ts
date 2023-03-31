import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorry',
  templateUrl: './categorry.component.html',
  styleUrls: ['./categorry.component.scss']
})
export class CategorryComponent implements OnInit {

  @Input() category:any
  @Input() count:any

  url:string = "https://dalilisouq.com/"

  constructor() { }

  ngOnInit(): void {

  }

}
