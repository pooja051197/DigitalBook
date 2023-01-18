package com.digitalbooks.bookService.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Id
	private Integer id;

	private String title;
	private String category;
	private String image;
	private Double price;
	private String publishDate;
	private String publisher;
	private Boolean active;
	private String content;
	private int authorId;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public int getAuthorId() {
		return authorId;
	}
	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}
	public Book() {
		
	}
	public Book(Integer id, Boolean active, String category, String content, String image, Double price,String publishDate, String publisher, 
			String title,  Integer authorId
			) {
		this.id = id;
		this.authorId = authorId;
		this.title = title;
		this.category = category;
		this.image = image;
		this.price = price;
		this.publishDate = publishDate;
		this.publisher = publisher;
		this.active = active;
		this.content = content;
	}
	
	
}
