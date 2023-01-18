import { Component, OnInit } from '@angular/core';
import { DBook } from 'src/app/DBook';
import { Book } from 'src/app/model/book.model';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent  implements OnInit{
  constructor(private bookservice : BookServiceService){}
ngOnInit(): void {
  this.getSubscribedBooks();
}
bookDetails:Array<{book:any,subscription:any}>=[];
//displayedColumns: string[] = ['title', 'category', 'image', 'price','publishDate', 'publisher', 'active', 'authorId'];
//books:Book[]=[];
// books =[{
//   title: "",
//   category: "",
//   image: "",
//   price: 0,
//   publishDate: "",
//   publisher: "",
//   active: true,
//   content: "",
//   authorId: 0
// },
// ];

public getSubscribedBooks(){
this.bookservice.getSubscribedBook().subscribe(
  (response: any)=>{
    console.log(response);
    this.bookDetails=response;
  },
  (error)=>{
    console.log(error);
  }
);
}
}
