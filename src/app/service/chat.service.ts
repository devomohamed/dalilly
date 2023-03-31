import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  headers=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(private http:HttpClient) { }

  // Preparing To Form Data
  preparingFormData(obj:any){
    let formData = new FormData()
    Object.entries(obj).forEach(([key , value]:any)=>{
      if(Array.isArray(value)){
        formData.append(key,JSON.stringify(value))
      }else{
        formData.append(key,value)
      }
    })
    return formData;
  }

  preparingFormData2(obj:any){
    let formData = new FormData()
    Object.entries(obj).forEach(([key , value]:any)=>{
      if(Array.isArray(value)){
        formData.append(key,JSON.stringify(value))
      }else{
        if(value !== undefined){
          formData.append(key, value)
          // console.log(key,typeof value,value);
        }
      }

    })
    return formData;
  }

  // Get Messages
  getMessages(){
    const headers = this.headers
    // const model = this.preparingFormData(data)
    return this.http.post(`${environment.apiURL}inbox?os=android`,{},{headers})
  }

  getChat(data:any){
    const headers = this.headers
    const model = this.preparingFormData2(data)
    return this.http.post(`${environment.apiURL}chat?os=android`,model,{headers})
  }

  sendMessage(data:any){
    const headers = this.headers
    const model = this.preparingFormData2(data)
    return this.http.post(`${environment.apiURL}send?os=android`,model,{headers})
  }

  RemoveMessage(data:any){
    const headers = this.headers
    const model = this.preparingFormData2(data)
    return this.http.post(`${environment.apiURL}message/delete?os=android`,model,{headers})
  }

  deleteAllChats(){
    const headers = this.headers
    return this.http.post(`${environment.apiURL}chats/delete?os=android`,{},{headers})
  }


}
