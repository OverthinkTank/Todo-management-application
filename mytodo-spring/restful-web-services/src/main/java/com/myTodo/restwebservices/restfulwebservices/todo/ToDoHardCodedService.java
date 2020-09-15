package com.myTodo.restwebservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;


@Controller
public class ToDoHardCodedService {
		
	//will act as Db-will create methods around this
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter;
	
	static {
		todos.add(new Todo(++idCounter, "Vwake", "JAVA + React + Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "Vwake", "Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "Vwake", "REST API", new Date(), false));
	}
	
	//Method to retrieve all Todos
	public List<Todo> findAll(){
		return todos;
	}
	
	//Method to delete each todo buy their respective ids
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
	
	//Method to retrieve individual to by their id
	Todo findById(long id) {
		// TODO Auto-generated method stub		
		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	//Method to update todos
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			/* if not present -> Insert todo*/
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			/*If present -> 1st delete that todo and add the newer/updated one*/
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
}
