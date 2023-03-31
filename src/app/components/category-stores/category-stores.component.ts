import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category-stores',
  templateUrl: './category-stores.component.html',
  styleUrls: ['./category-stores.component.scss']
})
export class CategoryStoresComponent implements OnInit {
  categories:any

  constructor(private category:CategoryService) { }

  getCategories(){
    this.category.getCategoriesContainStores().subscribe((res:any)=>{
      // console.log(res);
      this.categories = res.Response
    },(error)=>{
      console.log(error);

    })
  }

  ngOnInit(): void {
    this.getCategories()
  }

}
