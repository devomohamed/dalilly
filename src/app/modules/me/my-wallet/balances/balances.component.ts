import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/models/package.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss']
})


export class BalancesComponent implements OnInit {
  response!:any
  balances!:any[]
  constructor(private userserve:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userserve.balances().subscribe((res)=>{console.log(res)
      this.response=res;this.balances=this.response.Response;console.log(this.balances)})
  }


select(id:number){
  this.userserve.charge(id).subscribe((res)=>{this.router.navigateByUrl('/me/my-wallet')})

}
}
