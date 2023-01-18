import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/app/model/book.model';
import { BookServiceService } from 'src/app/services/book-service.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  constructor(private bookservice:BookServiceService,
    private userAuthService:UserAuthService,
  public userService: UserService,
  private snack: MatSnackBar){}

   
 
    isAuthor=false;
    isUserLoggedIn= false;
  ngOnInit(): void {

    if(this.userService.isUserLoggedIn()){
      
      this.isUserLoggedIn= true;
    }

    if(this.userAuthService.isAuthor()){
      this.isAuthor=true;
      this.getAuthorBooks();
    }
    
  }


  books:Book[]=[];
  blockBook:boolean=false;
  unblockBook:boolean =false;
book =[{
  
  title: "",
  category: "",
  image: "",
  price: 0,
  publishDate: "",
  publisher: "",
  active: true,
  content: "",
  authorId: 0
},
];

public getAuthorBooks(){
  this.bookservice.getAuthorsBook().subscribe(
    (response: any)=>{
      console.log(response);
      this.books=response;
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    }
  );
}

public block(bookId:any){
  this.bookservice.block(bookId).subscribe(
    (response)=>{
      console.log(response);
      Swal.fire('Success','Book is Blocked','success');
      this.getAuthorBooks();
      this.blockBook=true;
        this.unblockBook=false;
      
    },
    (error)=>{
      console.log("error");
    }
  );
}

public unblock(bookId:any){
  this.bookservice.unblock(bookId).subscribe(
    (response)=>{
      console.log(response);
      Swal.fire('Success','Book is Unblocked','success');
      this.getAuthorBooks();
      this.unblockBook=true;
        this.blockBook=false;
    
    },
    (error:HttpErrorResponse)=>{
      console.log("error");
    }
  );
}

public deleteBook(bookid:any){
  Swal.fire({
    icon:'info',
    showCancelButton:true,
    confirmButtonText:'Delete',
    title:"Do you really want to delete a book ??",
  }).then((result)=>{
    if(result.isConfirmed){
      this.bookservice.deleteBook(bookid).subscribe(
        (resp)=>{
          console.log(resp);
          this.snack.open('Question Deleted !!!','',{
            duration:3000,
          });
          this.getAuthorBooks();
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Unable to delete book','error');
      }
      )
    }
  })
}

}
