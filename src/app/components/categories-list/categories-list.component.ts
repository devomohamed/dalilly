import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories!: any[]

  constructor(private catserve:CategoryService) { }
  getAllCategories(){
    this.catserve.all().subscribe((res:any)=>{
      // console.log(res.Response);

      this.categories= res.Response
    })
  }

  ngOnInit(): void {
    this.getAllCategories()
  }

}
