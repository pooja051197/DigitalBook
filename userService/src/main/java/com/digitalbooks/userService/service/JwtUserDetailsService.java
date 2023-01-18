package com.digitalbooks.userService.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.digitalbooks.userService.entity.BUser;
import com.digitalbooks.userService.entity.SignUpRequest;
import com.digitalbooks.userService.entity.SignUpResponse;
import com.digitalbooks.userService.repository.UserRepository;
import com.digitalbooks.userService.util.JwtTokenUtil;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserRepository userRepo;


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	BUser user = userRepo.findByUsername(username);
	 PasswordEncoder encoder = new BCryptPasswordEncoder();

     String encodedStr = encoder.encode(user.getPassword());

        if (user.getUsername().equals(username)) {
            Set<SimpleGrantedAuthority> authorities = new HashSet<SimpleGrantedAuthority>();
	        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
            return new User(
                    user.getUsername(),
                    encodedStr,
                    authorities
                );
            } else {
                throw new UsernameNotFoundException("User not found with username: " + username);
        }
    
	
}

	public SignUpResponse register(SignUpRequest user) throws Exception {
		userRepo.findByUsername(user.getUsername());
		BUser newUser = new BUser();
		BUser existingUser=userRepo.findByUsername(user.getUsername());
		if(existingUser==null || existingUser.equals("")) {
		newUser.setUsername(user.getUsername());
		newUser.setPassword(user.getPassword());
		newUser.setEmail(user.getEmail());
		newUser.setName(user.getName());
		newUser.setRole(user.getRole());
		newUser.setSubscription(new ArrayList<>());
		userRepo.save(newUser);
		final String token = jwtTokenUtil.generateToken(user);
		return response(newUser,token);
		}else throw  new Exception("User already Registered");
	}
	
	public SignUpResponse response(BUser user, String token) {
		SignUpResponse res = new SignUpResponse();
		res.setEmail(user.getEmail());
		res.setId(user.getId());
		res.setPassword(user.getPassword());
		res.setRole(user.getRole());
		res.setToken(token);
		res.setUsername(user.getUsername());
		return res;
	}

}