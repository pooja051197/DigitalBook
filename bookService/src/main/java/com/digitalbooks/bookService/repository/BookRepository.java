package com.digitalbooks.bookService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalbooks.bookService.entity.Book;
@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
//	List<Book> findByAuthorId(Integer id);

	List<Book> findByCategory(String category);

	List<Book> findByTitleIgnoreCaseOrCategoryOrPriceOrAuthorId(String title,
			String category, Double price,  int authorId);

	List<Book> findByAuthorId(int authorId);

	Book findByTitle(String title);
	
}
