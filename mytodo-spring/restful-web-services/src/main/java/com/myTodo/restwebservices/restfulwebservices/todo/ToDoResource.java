package com.myTodo.restwebservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myTodo.restwebservices.restfulwebservices.todo.Todo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoResource {
	
	@Autowired
	private ToDoHardCodedService todoService; 
	
/*	GET	 */
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllToDos(@PathVariable String username) throws InterruptedException{
//		Thread.sleep(3000);	
		return todoService.findAll();
	}
	
/*	GET	- INDIVIDUAL TODO */	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getToDo(@PathVariable String username, @PathVariable long id) throws InterruptedException{
//		Thread.sleep(3000);	
		return todoService.findById(id);
	}
	
/*	PUT - UPDATE/Edit INDIVIDUAL TODO  -> we created save additionally to use this PUT*/	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateToDo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
	}

/*  POST - INDIVIDUAL TODO */	
	@PostMapping("/users/{username}/todos/")
	public ResponseEntity<Void> addToDo(@PathVariable String username, @RequestBody Todo todo){
		Todo createdTodo = todoService.save(todo);
		//Location of resource 
		//Get Current resource URL -> if we append "id" to "/users/{username}/todos/", it will give complete URL where we want to POST
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
/*	DELETE  */
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long id){		
		Todo todo = todoService.deleteById(id);
//		System.out.println(todo.isDone());
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

}
