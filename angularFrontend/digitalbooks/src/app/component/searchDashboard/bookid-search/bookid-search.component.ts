import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DBook } from 'src/app/DBook';
import { Book } from 'src/app/model/book.model';
import { BookServiceService } from 'src/app/services/book-service.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookid-search',
  templateUrl: './bookid-search.component.html',
  styleUrls: ['./bookid-search.component.css']
})
export class BookidSearchComponent implements OnInit {
  constructor(
    private bookService: BookServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private userAuthService:UserAuthService,
  public userService: UserService

  ){}
  isAuthor=false;
  isUserLoggedIn= false;

  books1:Book[]=[];
  ngOnInit(): void {
    if(this.userService.isUserLoggedIn()){
      
      this.isUserLoggedIn= true;
    }

    if(this.userAuthService.isAuthor()){
      this.isAuthor=true;
    }

    this.getAllBook(); 
  }

  books:DBook[] = [];

  bookId:string='';
  btnSubscribe:boolean=false;
  btnUnSubscribe:boolean=false;
  public getAllBook(){
    
   
 this.bookService.getAllBook()
    .subscribe(
      (response:any) => {
        console.log(response);
        this.books1 = response;
      },
      (error) => alert('something went wrong')
    );
  }

  public subscribe(bookId:any){

    this.bookService.subscribe(bookId).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire('Success','Book is Subscribed','success');
        this.bookId='';
        this.btnSubscribe=true;
        this.btnUnSubscribe=false;
       
      },
      (error)=>{
        console.log("error");
      }
    );
  }

  public unsubscribe(bookId:any){
    this.bookService.unsubscribe(bookId).subscribe(
      (response)=>{
        //console.log(response);
        Swal.fire('Success','Book is Unsubscribed','success');
        this.bookId='';
        this.btnUnSubscribe=true;
        this.btnSubscribe=false;
        
      },
      (error)=>{
        console.log("error");
      }
    );
  }

}
