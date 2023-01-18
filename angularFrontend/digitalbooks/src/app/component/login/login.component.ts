import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService:UserService,
    private userAuthService:UserAuthService,
    private router : Router,
    private snack : MatSnackBar
    ){}
  ngOnInit(): void {
    
  }
  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
       //ng g this.userService
        // console.log(response.user.role);
        // console.log(response.token);
        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setToken(response.token);
        this.userAuthService.setUser(response.user);
        console.log("User regsitered: " + response);
        console.log(response);

        const role = response.user.role.toUpperCase();
        if(role === 'AUTHOR'){
          this.router.navigate(['/author']);
        }else{
          this.router.navigate(['/user']);
        }
      },
      (error)=>{
        console.log(error);
        this.snack.open('Please use valid credentials')
      }
    );
    console.log("form submitted");
  }
}
