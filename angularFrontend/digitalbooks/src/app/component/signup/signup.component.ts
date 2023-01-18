import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private userService : UserService,
    private snack:MatSnackBar
  ){}
  ngOnInit(): void {
    
  }

  public user ={
    username :'',
    password :'',
    name:'',
    email:'',
    role:'',

  }

  formSubmit(){
    console.log(this.user);

    if(this.user.name==null || this.user.name==''){
      this.snack.open('Name is required !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.user.username==null || this.user.username==''){
      this.snack.open('Username is required !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.user.password==null || this.user.password==''){
      this.snack.open('Password is required !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.user.role==null || this.user.role==''){
      this.snack.open('Please select Role !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.user.role==null || this.user.role==''){
      this.snack.open('Please select Role !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.user.email==null || this.user.email==''){
      this.snack.open('Email is angular !!!', '', {
        duration: 3000
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        //alert("success");
        Swal.fire('User is Registerd !!!','Your user id is : ' + data.id ,'success');
      },
      (error)=>{
        console.log(error);
        alert("Failed");
      }
    );
  }
 
}
