package com.digitalbooks.userService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.digitalbooks.userService.entity.Book;
import com.digitalbooks.userService.restclient.BookClient;

@RestController
@RequestMapping("/digitalbook/search/")
@CrossOrigin
public class BookController {
	@Autowired
	 private BookClient bookClient;
		
	@GetMapping("searchBooks/")
    public List<Book> serachBook(@RequestParam String title, @RequestParam String category,
			@RequestParam Double price, @RequestParam int authorId){
      
        return bookClient.searchBooks(title,category,price,authorId);
    } 
	
	@GetMapping("books/")
    public List<Book> getAllBooks(){
      
        return bookClient.getAllBooks();
    } 
	
	@GetMapping("book/id/{bookId}/")
	 public Book getBookById(@PathVariable int bookId){
		return bookClient.getBookById(bookId);
	}
	
	@GetMapping("book/title/{title}")
	 public Book getBookByTitle(@PathVariable String title) {
		return bookClient.getBookbyTitle(title);
	}
	
	@GetMapping("book/author/{authorId}")
	 public List<Book> getBookbyAUthorId(@PathVariable int authorId) {
		return bookClient.getBookbyAuthorId(authorId);
		 
	}

}
