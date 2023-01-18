import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private router : Router) { }

  public setRole(role:string){
    localStorage.setItem("role", role);
  }

  public getRole() {
    const role = localStorage.getItem('role');
    //return role!=null ?role : "";
    //console.log("Role get : " + role);
    return localStorage.getItem('role');
  }

  public setToken(token:string){
    localStorage.setItem("token", token);
  }

  public setUser(user:any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getUser(){
    let usrStr = localStorage.getItem("user");
    if(usrStr!=null){
      return JSON.parse(usrStr);
    }
    else{
this.logout();
    }
  }

  public logout(){
    //this.userAuthService.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('role')
      this.router.navigate(['/home']);
  }

  public getToken() {
    return localStorage.getItem("token");
  }
 

  public clear(){
    // localStorage.removeItem(this.getRole());
    // localStorage.removeItem(this.getToken());
    localStorage.clear();
  }

  public isAuthor(){
    const role: any = this.getRole();
    if(role === 'Author' || role === 'Author' || role === 'AUTHOR'){
      return true;
    }
    else{
      return false;
    }
  }
  
}
