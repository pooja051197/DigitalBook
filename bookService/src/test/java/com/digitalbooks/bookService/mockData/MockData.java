package com.digitalbooks.bookService.mockData;

import java.util.ArrayList;
import java.util.List;

import com.digitalbooks.bookService.entity.Book;

public class MockData {
	public  List<Book> books = new ArrayList<Book>();
	public MockData(){

	Book book = new Book();
	book.setId(1);
	book.setActive(true);
	book.setTitle("Book1");
	book.setCategory("COMIC");
	book.setContent("Content1");
	book.setImage("image");
	book.setPrice(200.0);
	book.setPublishDate("22-10-2021");
	book.setPublisher("A");
	books.add(book);
	
	}
}
