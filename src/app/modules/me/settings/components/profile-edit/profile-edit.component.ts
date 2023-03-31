import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile_data!:any
  data!:any
  selectedfile?:File
  imageSrc?: any;
  gender!:number
  country!:Country
  allcountries:any
  countries!:Country[]
  country_code!:string
  is_confirm=0

  constructor(private profile:UserService,private categoryserve:CategoryService,private route:Router) { }
   fd=new FormData();
  ngOnInit(): void { this.getallcountries()
    this.profile.profile({country_id:1
    }).subscribe((res)=>{
  this.profile_data=res
  this.country=this.profile_data.Response.country
  this.country_code=this.profile_data.Response.country_code
  let mobile=(this.profile_data.Response.mobile).toString()
     // mobile= mobile.slice((this.country.phone_code).toString().length)
        this.profile_data.Response.mobile=mobile
        console.log(this.country_code)
  this.gender=this.profile_data?.Response.gender
  this.imageSrc=`https://dalilisouq.com/${this.profile_data.Response.image}`
  console.log(this.profile_data)

})

  }
  changecountrycode(event:any){
     this.country_code=event.target.value
    console.log(event.target.value)
  }
  changegender(gender:number){

  if(this.gender==1)
  this.gender=0
  else this.gender=1

  }
  getallcountries(){
 this.categoryserve.countries().subscribe((res)=>{this.allcountries=res.Response.countries;console.log(this.allcountries)})
  }

confirm(){
  if(this.is_confirm==0)
  this.is_confirm=1
  else
  this.is_confirm=0
  console.log(this.is_confirm)
}
edit(){
this.fd.append('is_public',this.is_confirm as unknown as string)
 this.fd.append('name',this.profile_data.Response.name)
 this.fd.append('s_name',this.profile_data.Response.s_name)
 this.fd.append('email',this.profile_data.Response.email)
 this.fd.append('mobile',this.profile_data.Response.mobile)
 this.fd.append('birth_date',this.profile_data.Response.birth_date)
 this.fd.append('facebook',this.profile_data.Response.facebook)
 this.fd.append('instagram',this.profile_data.Response.instagram)
 this.fd.append('youtube',this.profile_data.Response.youtube)
 this.fd.append('google',this.profile_data.Response.google)
 this.fd.append('twitter',this.profile_data.Response.twitter)

 this.fd.append('gender',this.gender as unknown as string)
 if(this.selectedfile)
 this.fd.append('image',this.selectedfile as unknown as string)

this.fd.append('country_code',this.country_code)

  this.profile.update(this.fd).subscribe((res)=>{this.profile_data=res;this.route.navigateByUrl('/me/settings')})

}
selectedFile(event:any){
  this.selectedfile= <File> event.target.files[0]

 if (event.target.files && event.target.files[0]) {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.onload = e => {this.imageSrc = reader.result;
 // this.data.store_img=this.selectedfile
  this.imageSrc=URL.createObjectURL(event.target.files[0])
  localStorage.setItem('img',this.imageSrc)
 console.log(this.data)
}
  reader.readAsDataURL(file);
}
}}
