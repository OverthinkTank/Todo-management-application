package com.myTodo.restwebservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;


@Controller
public class ToDoHardCodedService {
		
	//will act as db-will create methods around this
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter;
	
	static {
		todos.add(new Todo(++idCounter, "Vwake", "JAVA + React", new Date(), false));
		todos.add(new Todo(++idCounter, "Vwake", "Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "Vwake", "REST API", new Date(), false));
	}
	
	
	public List<Todo> findAll(){
		return todos;
	}
	
	
}
