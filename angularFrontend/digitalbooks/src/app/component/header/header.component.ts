import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(
  private userAuthService:UserAuthService,
  public userService: UserService
  ){}

  ngOnInit(): void {
    
    
  }

public logout(){
  return this.userAuthService.logout();
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

 public isAuthor(){
  return this.userAuthService.isAuthor();
 }

}
