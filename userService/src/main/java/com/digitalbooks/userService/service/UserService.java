package com.digitalbooks.userService.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalbooks.userService.entity.BUser;
import com.digitalbooks.userService.entity.Book;
import com.digitalbooks.userService.entity.Subscription;
import com.digitalbooks.userService.entity.SubscriptionReq;
import com.digitalbooks.userService.repository.SubscriptionRepository;
import com.digitalbooks.userService.repository.UserRepository;
import com.digitalbooks.userService.util.BookUtility;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private SubscriptionRepository subRepo;
	
	@Autowired
	private BookUtility bookUtility;

	public BUser save(BUser user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}
	public Subscription subscribeBook(int userId, int bookId) {
		BUser user = userRepo.findById(userId).get();
		Subscription sub = new Subscription();
		sub.setBookID(bookId);
		sub.setTime(LocalTime.now());
		sub.setDate(LocalDate.now());
		user.getSubscription().add(sub);
		return subRepo.save(sub);
		
	}
	
	public List<SubscriptionReq> getSubscribedBook(int userId) {
		BUser user = userRepo.findById(userId).get();
		return user.getSubscription().stream().map(subscription->{
			int subBookId =subscription.getBookID();
			Book book = bookUtility.getBookById(subBookId);
			return new SubscriptionReq(book,subscription);
		}).collect(Collectors.toList());
			
	}
	
	public int cancelSubscription(int userId, int bookId) {
		BUser user = userRepo.findById(userId).get();
		user.getSubscription().stream().filter(sub->sub.getBookID() == bookId).findFirst().ifPresent(s-> {
			user.getSubscription().remove(s);
			subRepo.delete(s);
		});
		 
		return user.getSubscription().size();
	}
	
	

}
