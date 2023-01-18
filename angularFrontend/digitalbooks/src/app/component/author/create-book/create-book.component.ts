import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/app/model/book.model';
import { BookServiceService } from 'src/app/services/book-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  constructor(
    private bookservice:BookServiceService,
    private snack:MatSnackBar
  ){}
  ngOnInit(): void {
   
  }

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

  

  createBook(bookForm:NgForm){
    if(this.book.title==null || this.book.title==''){
      this.snack.open('Title is required !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.book.content==null || this.book.content==''){
      this.snack.open('Content is required !!!', '', {
        duration: 3000
      });
      return;
    }

    if(this.book.price==0 || this.book.price==null){
      this.snack.open('Price is required !!!', '', {
        duration: 3000
      });
      return;
    }

   

    this.bookservice.createBook(this.book).subscribe(
      (response :Book)=>{
        Swal.fire('Success','Book is Created','success');
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
      (error)=>{
        Swal.fire('Error !!!','Error while creating Book','error');
        console.log("Error  ******* " +error);
      }
    );
  }
}
