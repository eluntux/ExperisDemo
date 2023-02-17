package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpringDemoController {
	@Autowired

	@RequestMapping("/")
	public String index() {
		return "Congratulations on creating your first controller";
	}

	@GetMapping("/login")
	public ResponseEntity<Boolean> login(String user, String pass) {
		Boolean passed = false;
		ResponseEntity<Boolean> servRes=null; 
		if (user.equalsIgnoreCase("admin") && pass.equalsIgnoreCase("QWERTY")) {
			passed = true;
			servRes = new ResponseEntity<Boolean>(passed, HttpStatus.OK);
		} else {
			servRes = new ResponseEntity<Boolean>(passed, HttpStatus.OK);
		}
		return servRes;
	}
}