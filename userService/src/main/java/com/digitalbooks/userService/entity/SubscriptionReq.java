package com.digitalbooks.userService.entity;

public class SubscriptionReq {
	 private Book book;
	 private Subscription subscription;
	
	public SubscriptionReq(Book book, Subscription subscription) {
		this.book = book;
		this.subscription=subscription;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	public Subscription getSubscription() {
		return subscription;
	}
	public void setSubscription(Subscription subscription) {
		this.subscription = subscription;
	}
	
	

}
