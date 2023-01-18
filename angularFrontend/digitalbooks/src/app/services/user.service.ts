import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host:string = "http://localhost:8081/authenticate/";
  requestHeader = new HttpHeaders({
    "No-Auth":"True"
  });

  constructor(
    private httpClient:HttpClient,
    private userAuthService : UserAuthService
    ) {
    
   }

   public addUser(user:any){
    return this.httpClient.post(this.host + "register",user, {headers: this.requestHeader});
  }

   public login(loginData:NgForm){
    return this.httpClient.post(this.host + "login",loginData, {headers: this.requestHeader});
  }

  public roleMatch(allowedRoles: string | any[]):  boolean | undefined {
    let isMatch = false;
   // const userRoles: any = this.userAuthService.getRole();
    const userRole: any = localStorage.getItem('role');
//console.log("role pooja  +++ " + userRole);
    if (userRole != null && userRole) {
     
          if (userRole === allowedRoles) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      
   
      return false;
    
  }

  public isUserLoggedIn(){
    let tokenstr = localStorage.getItem('token');
    if(tokenstr =='undefined' || tokenstr==null || tokenstr==''){
    // if(localStorage.getItem('role') &&localStorage.getItem("jwtToken")){
      return false;
    }
     else{
       return true;
     } 
       
   }
  

  }

