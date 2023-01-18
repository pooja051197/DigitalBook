package com.digitalbooks.userService.controller;

import java.util.Set;

public class SubscriptionRequest {


	private Set<Integer> booksIds;

	public Set<Integer> getBooksIds() {
		return booksIds;
	}

	public void setBooksIds(Set<Integer> booksIds) {
		this.booksIds = booksIds;
	}



}
