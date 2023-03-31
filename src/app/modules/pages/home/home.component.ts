import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../service/home.service';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rows:any
  categories:[] = []
  cats:[] = []
  myCategories:any
  index = 0
  length:any
  isDone:boolean = false



  constructor(private homeService:HomeService,private categoryServies:CategoryService) { }

  getCategories(){
    this.categoryServies.all().subscribe((res:any)=>{
      // this.categoriesCopy = res.Response
      this.myCategories = res.Response
      this.myCategories.map((el:any)=>{
        el.name = el.name.split(' ')[0]
      })
      // console.log(res.Response);
      // console.log(this.categories);

    })
  }

  getSubCategories(){
    this.categoryServies.getSubCategories().subscribe((res:any)=>{
      // console.log(res.Response);
      this.cats = res.Response
      this.length = res.Response.length -1
      console.log(this.length);

    })
  }

  getRows(){
    this.homeService.getRows().subscribe((res:any)=>{
      console.log(res.Response);
      this.rows = res.Response
    },(error:any)=>{console.log(error);
    })
  }

  onScroll() {
    console.log("scrolled!!");
    if(this.index <= this.length){
      // console.log(this.length ,this.index);
      // setTimeout(() => {
      //   this.categories.push(this.cats[this.index])
      //   this.index += 1
      // }, 3000);
      this.categories.push(this.cats[this.index])
        this.index += 1
    }else{
      // console.log('else');
      this.isDone = true
    }

  }

  ngOnInit(): void {
    this.getCategories()
    this.getSubCategories()
    this.getRows()
  }


}
