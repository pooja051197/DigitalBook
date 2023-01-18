package com.digitalbooks.userService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

@SpringBootApplication
@EnableFeignClients
@SecurityScheme(
		name = "demo_security_scheme", 
		scheme = "bearer", 
		type = SecuritySchemeType.HTTP, 
		in = SecuritySchemeIn.HEADER
	)
public class UserServiceApplication  {
	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}



}
