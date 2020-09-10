package com.myTodo.restwebservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
	
/*	DELETE  */
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long id){
		
		Todo todo = todoService.deleteById(id);
		System.out.println(todo.isDone());
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
}
