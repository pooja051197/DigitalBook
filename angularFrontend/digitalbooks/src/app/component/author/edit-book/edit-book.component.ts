import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book.model';
import { BookServiceService } from 'src/app/services/book-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  constructor(
    private bookservice:BookServiceService
  ){}

  book: Book = {
   id:0,
    title: "",
    category: "",
    image: "",
    price: 0,
    publishDate: "",
    publisher: "",
    active: true,
    content: "",
    authorId: 0
  }

  bookId:string='';
  public editBook(bookeditForm:NgForm){
    this.bookservice.editBook(this.book,this.bookId).subscribe(
      (response :Book)=>{
        Swal.fire('Success','Book is Edited','success');
        console.log("Success  ******* " +response);
        this.book={
          id:0,
          title: "",
          category: "",
          image: "",
          price: 0,
          publishDate: "",
          publisher: "",
          active: true,
          content: "",
          authorId: 0
        };
      },
      (error:HttpErrorResponse)=>{
        Swal.fire('Error !!!','Error while Editing Book','error');
        console.log("Error  ******* " +error);
      }
    );
  }
}
