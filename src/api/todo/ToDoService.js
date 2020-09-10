import axios from 'axios';


class ToDoService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/{username}/todos`);
        // console.log("To Do RESTAPI Service called");
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/{username}/todos/${id}`);
        // console.log("To Do RESTAPI Service called");
    }
    
}

export default new ToDoService();

