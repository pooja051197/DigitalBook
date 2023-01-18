package com.digitalbooks.userService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.digitalbooks.userService.entity.BUser;

@Repository
public interface UserRepository extends JpaRepository<BUser, Integer> {
	BUser findByUsername(String username);

}
