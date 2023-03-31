import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
user={} as User
message_error?:any
isPassword:string = 'password'
countries:any

myForm!:FormGroup
  constructor(
    private categoryServies:CategoryService,
    private registservice:UserService,
    private activeroute:Router,
    private fb:FormBuilder
    ) { }

    getCountries(){
      this.categoryServies.getCountries().subscribe((res:any)=>{
        console.log(res);
        this.countries = res.Response.countries
      })
    }

  ngOnInit(): void {
    this.getCountries()
    this.myForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      name:['',[Validators.required,Validators.minLength(3)]],
      s_name:'',
      password:['',[Validators.required,Validators.minLength(3)]],
      mobile:['',[Validators.required]],
      gender:[1,[Validators.required]],
      country_code:[1,[Validators.required]],
      birth_date:['',[Validators.required]],
      country_id:[1,[Validators.required]],
      is_driver:0,
      is_confirm:1,
      image:undefined,
      policy:[false,[Validators.required]]
    })
    // this.myForm.valueChanges.subscribe(changes=>{
      // console.log(changes);
    // })
  }
  regist(){
    // this.user.gender=1
    // this.user.country_code=1
    // this.user.country_code=966
    // this.user.country_id=3
    // console.log(this.user)
    let form = {...this.myForm.value}
    form.country_code = parseInt(form.country_code)
    delete form.policy

    console.log(form);

    // this.registservice.register(this.user).subscribe(
    //   (res)=>{this.message_error=res
    //     if(this.message_error.Error.status=='true')
    //     this.activeroute.navigate(['/login'])
    //     else
    //     this.message_error=this.message_error.Error
    //   })
    // console.log(this.myForm);
  }



  changeInputType(){
    if(this.isPassword == 'password'){
      console.log(this.isPassword);
      this.isPassword = 'text'
    }else{
      this.isPassword = 'password'
      console.log(this.isPassword);
    }
    console.log(this.isPassword);
  }

}
