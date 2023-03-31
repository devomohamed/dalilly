import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcategories-list',
  templateUrl: './subcategories-list.component.html',
  styleUrls: ['./subcategories-list.component.scss']
})
export class SubcategoriesListComponent implements OnInit {
  id:any
  subCategories:any

  constructor(private category:CategoryService,private activateRoute:ActivatedRoute,private router:Router) {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
  }

  getSubCategories(){
    this.category.sub_categories(this.id).subscribe((res:any)=>{
      // console.log(res);
      this.subCategories = res.Response
    },(error:any)=>{
      console.log(error);
    })
  }

  checkandNavigate(sub:any){
    if(sub.has_category){
      this.router.navigate([`/categories/${this.id}/${sub.id}`])
    }else{
      this.router.navigate(['/all-ads'], {queryParams: {catId:this.id,subId:sub.id}})
    }
  }

  ngOnInit(): void {
    this.getSubCategories()
  }

}
