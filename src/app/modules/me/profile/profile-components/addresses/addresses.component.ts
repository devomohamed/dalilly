import { Component, OnInit } from '@angular/core';
import { Address } from '../../../../../models/addresss.model';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
response!:any
addresses!:Address[]
afterdel!:object
mess!:string
  constructor(private addressserve:UserService,private activeroute:Router) { }

  ngOnInit(): void {
    this.addressserve.showalladdress().subscribe((res)=>{
      this.response=res;
      this.addresses=this.response.Response;
      
    })


  }
  delete(id:number){
   
   this.addressserve.deleteaddress(id).subscribe((res)=>{
    // this.activeroute.navigateByUrl('/me/profile/addresses')
    window.location.reload();
  })
  }

}
