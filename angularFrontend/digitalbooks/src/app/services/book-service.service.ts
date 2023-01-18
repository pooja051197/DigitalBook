import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, throwError } from 'rxjs';
import { Book } from 'src/app/model/book.model';
import { UserAuthService } from './user-auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private host:string = "http://localhost:8081/digitalbook/";
  
  constructor(private httpCLient: HttpClient,
    public userAuthService: UserAuthService
    ) {
   }
   userId = this.userAuthService.getUser().id;
  public createBook(book:Book){
   // let authorid=book.authorId;
    
    console.log("user id  " + this.userId)
    let url=this.host + 'author/'+ this.userId +'/book';
    return this.httpCLient.post<Book>(url, book);
  }

  public editBook(book:Book,bookId:any){
    // let authorid=book.authorId;
     
     console.log("user id  " + this.userId)
     let url=this.host + 'author/'+ this.userId +'/book/' + bookId ;
     return this.httpCLient.put<Book>(url, book);
   }

  public getAuthorsBook(){
   
    console.log("user id  " +this.userId);
    let url=this.host + 'search/book/author/'+ this.userId ;
    return this.httpCLient.get<Book>(url);
  }

  public searchBookbyTitle(titleForm:NgForm){
   
    let title = titleForm.value;
    console.log("title Search *****" + title);
    let url=this.host + 'search/book/title/'+ title ;
    return this.httpCLient.get<Book>(url);
  }

  public searchBookbyBookId(bookid:any){
   
    console.log("Book Id Search *****" + bookid);
    let url=this.host + 'search/book/id/'+ bookid+'/';
    return this.httpCLient.get<Book>(url);
  }

  public subscribe(bookid:any){
   
    console.log("Book Id Search *****" + bookid);
    let url=this.host + 'reader/'+this.userId+ '/subscribe/'+bookid;
    return this.httpCLient.post(url,'');
  }

  public unsubscribe(bookid:any){
   
    console.log("Book Id Search *****" + bookid);
    let url1=this.host + 'reader/'+this.userId+ '/subscribe/cancel/'+ bookid;
    return this.httpCLient.post(url1,"");
  }

  public getSubscribedBook(){
   
    console.log("user id  " +this.userId);
    let url=this.host + 'reader/'+ this.userId +'/books/';
    return this.httpCLient.get<Book[]>(url);
  }

  public block(bookid:any){
   
    console.log("Book Id Search *****" + bookid);
    let url=this.host + 'author/'+this.userId+ '/book/'+bookid +'/blockyes';
    return this.httpCLient.post(url,'');
  }

  public unblock(bookid:any){
   
    console.log("Book Id Search *****" + bookid);
    let url=this.host + 'author/'+this.userId+ '/book/'+bookid +'/blockno';
    return this.httpCLient.post(url,'');
  }

  public getAllBook(){

    //console.log("Book Id Search *****" + bookid);
    let getUrl=this.host + 'search/books/';
    return this.httpCLient.get<Book[]>(getUrl);
  }

  
  public deleteBook(bookid:any){

    //console.log("Book Id Search *****" + bookid);
    let url=this.host + 'author/'+this.userId+ '/book/delete/'+bookid;
    return this.httpCLient.delete(url);
  }
}
