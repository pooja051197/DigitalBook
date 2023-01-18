package com.digitalbooks.userService.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.digitalbooks.userService.entity.Book;
import com.digitalbooks.userService.restclient.BookClient;
@Service
public class BookUtility {
	
	@Autowired
	BookClient bookClient;
	
    public Book getBookById(@PathVariable int bookId){
        return bookClient.getBookById(bookId);
    } 
	

}
