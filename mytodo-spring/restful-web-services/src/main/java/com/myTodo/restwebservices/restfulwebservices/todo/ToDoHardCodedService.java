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
	
	public Todo deleteById(long id){
		Todo todo = findById(id);
		if(todo==null) {
			return null;
		}
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		
		return null;
	}

	private Todo findById(long id) {
		// TODO Auto-generated method stub
		
		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
}
