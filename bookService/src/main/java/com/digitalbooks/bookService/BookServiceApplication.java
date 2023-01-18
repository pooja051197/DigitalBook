package com.digitalbooks.bookService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookServiceApplication  {

//	@Autowired
//	private AuthorService authService;
//	
//	@Autowired
//	private UserService userService;
	
//	private  Author getauthor(int id) {
//		return authService.getAuthor(id);
//	}
//	
//	@Override
//	public void run(String... args) throws Exception {
//		authService.savAuthor(new Author(1,"Miley","Author1"));
//		authService.savAuthor(new Author(2,"John","Author2"));
//		authService.savAuthor(new Author(3,"Albert","Author3"));
//		
//		userService.saveUser(new UserDetail(1,"pooja","pooja@gmail.com","pooja@123","READER", getauthor(1)));
//		userService.saveUser(new UserDetail(2,"monu","monu@gmail.com","monu@123","READER", getauthor(2)));
//		userService.saveUser(new UserDetail(3,"abc","abc@gmail.com","abc@123","READER", getauthor(3)));
//		
//	}
	
	public static void main(String[] args) {
		SpringApplication.run(BookServiceApplication.class, args);
	}

	

}
