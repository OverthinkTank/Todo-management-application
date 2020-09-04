package com.myTodo.restwebservices.restfulwebservices;
import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
//To resolve CORS ERROR!!!!!
@CrossOrigin(origins = "http://localhost:4200")
//https://localhost:4200

public class HelloWorldController {
	
	//GET
	//URI - /hello-world  
	//method - "HelloWorld"

//	@RequestMapping(method = RequestMethod.GET, path = "/hello-world")
	@GetMapping(path = "/hello-world")
	public String HelloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean1");
	}
	
	//"/hello-world/path-variable/Vwake"
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//		throw new RuntimeException("Something Error as Expected");
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
