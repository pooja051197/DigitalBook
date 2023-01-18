//package com.digitalbooks.bookService;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.mockito.Mockito.when;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.digitalbooks.bookService.entity.Book;
//import com.digitalbooks.bookService.exception.BookException;
//import com.digitalbooks.bookService.mockData.MockData;
//import com.digitalbooks.bookService.repository.BookRepository;
//import com.digitalbooks.bookService.services.BookService;
//
//@SpringBootTest
//public class BookServiceTest {
//	
//	@InjectMocks
//	BookService bookService;
//	@Mock
//	BookRepository bookRepository;
//	
//	MockData mockdata = new MockData();
//	@Test
//	void searchBooksTest() {
//		List<Book> books = mockdata.books.stream()
//				.filter(book -> book.getCategory().equals("COMIC"))
//				.collect(Collectors.toList());
//		when(bookRepository.findByTitleIgnoreCaseOrCategoryOrPriceOrAuthorId("title",
//				"COMIC", 100.33, 1)).thenReturn(books);
//		assertEquals(bookRepository.findByTitleIgnoreCaseOrCategoryOrPriceOrAuthorId("title", "COMIC", 100.33,1), books);
//	}
//	
//	@Test
//	void testSaveBook() throws BookException {
//		Book book = mockdata.books.get(0);
//		when(bookRepository.save(book)).thenReturn(mockdata.books.get(0));
//		assertEquals(bookService.saveBook(1,mockdata.books.get(0)), mockdata.books.get(0));
//	}
//	
//	@Test
//	void testDeleteBook() throws BookException {
//		Book book = new Book();
//		int bookId=1;
//		int authorId=1;
//		Mockito.when(bookRepository.findById(bookId)).thenReturn(Optional.of(book));
//		assertThrows(BookException.class,()-> bookService.deleteBook(authorId, bookId));
//		assertThat(bookId==1);
//	}
//	
//	
//
//}
