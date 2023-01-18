package com.digitalbooks.userService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitalbooks.userService.entity.BUser;
import com.digitalbooks.userService.entity.ResponseMessage;
import com.digitalbooks.userService.entity.Subscription;
import com.digitalbooks.userService.entity.SubscriptionReq;
import com.digitalbooks.userService.service.UserService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;


@RestController
@RequestMapping("/digitalbook/")
@SecurityRequirement(name = "demo_security_scheme")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	

    
    @PostMapping("reader/{userId}/subscribe/{bookId}")
	public ResponseEntity<?> subscribeBook(@PathVariable int userId,@PathVariable int bookId) {
		Subscription subscription=userService.subscribeBook(userId,bookId);
		if (subscription!=null) {
			return new ResponseEntity<ResponseMessage>(new ResponseMessage("successfully Subscribed Book"), HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
    
   
	
	@GetMapping("reader/{userId}/books/")
	public List<SubscriptionReq> getSubscribedBooks(@PathVariable int userId) {
		return userService.getSubscribedBook(userId);
		
	}
	

	@PostMapping("reader/{userId}/subscribe/cancel/{bookId}")
	public ResponseEntity<?> cancelSubscription(@PathVariable int userId,@PathVariable int bookId) {
		int subscription=userService.cancelSubscription(userId,bookId);
		if ( subscription == 0) {
			return new ResponseEntity<ResponseMessage>(new ResponseMessage("successfully Unsubscribed Book"), HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
    
	
}


