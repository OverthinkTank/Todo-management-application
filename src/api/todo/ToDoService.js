import axios from 'axios';


class ToDoService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/{username}/todos`);
        // console.log("To Do RESTAPI Service called");
    }

    retrieveTodo(name,id){
        return axios.get(`http://localhost:8080/users/{username}/todos/${id}`);
        // console.log("To Do RESTAPI Service called");
    }

    updateTodo(name,id,todo){
        console.log("To Do POST RESTAPI Service called");
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`,todo);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/{username}/todos/${id}`);
        // console.log("To Do RESTAPI Service called");
    }
    
}

export default new ToDoService();

