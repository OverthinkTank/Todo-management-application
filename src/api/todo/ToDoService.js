import axios from 'axios';


class ToDoService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/{name}/todos`);
        // console.log("To Do RESTAPI Service called");
    }

    
}

export default new ToDoService();

