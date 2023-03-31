import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcategories-sub',
  templateUrl: './subcategories-sub.component.html',
  styleUrls: ['./subcategories-sub.component.scss']
})
export class SubcategoriesSubComponent implements OnInit {

  subId:any
  catId:any
  subCategories:any

  constructor(private category:CategoryService,private activateRoute:ActivatedRoute,private router:Router) {
    this.catId = this.activateRoute.snapshot.paramMap.get('id')
    this.subId = this.activateRoute.snapshot.paramMap.get('subId')
    console.log(this.subId);

  }

  getSubCategories(){
    this.category.sub_categories(this.subId).subscribe((res:any)=>{
      // console.log(res);
      this.subCategories = res.Response
    },(error:any)=>{
      console.log(error);
    })
  }
  checkandNavigate(sub:any){
    this.router.navigate(['/all-ads'], {queryParams: {catId:this.catId,subId:this.subId,subSubId:sub.id}})
  }

  ngOnInit(): void {
    this.getSubCategories()
  }

}
