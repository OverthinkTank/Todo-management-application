import React , {Component} from 'react';
import TodoService from '../../api/todo/ToDoService';
import AuthenticationService from '../ToDo/AuthenticationService'
import ToDoService from '../../api/todo/ToDoService';

class ListToDosComponent extends Component{
    constructor(props){
        // console.log('constructor');
        super(props)
        this.state = {
            todos : [],
            message : null
        }

        this.deleteSelectedToDo = this.deleteSelectedToDo.bind(this);
        this.updateSelectedToDo = this.updateSelectedToDo.bind(this);
        // this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentDidMount(){
        //MOVED TO refreshTodos()
        console.log('ComponentDidMount');
        // Getting username to perform operations on ToDo List
        let username = AuthenticationService.getLoggedInUserName();
        //GET - RETRIEVING logged user's ToDo
        TodoService.retrieveAllTodos(username)
        .then(
            response => {
                // console.log(response);
                this.setState({todos: response.data})
            }
        )
        // this.refreshTodos();
        console.log(this.state);
    }

    // refreshTodos(){
    //     // let username = AuthenticationService.getLoggedInUserName();
    //     // //GET - RETRIEVING logged user's ToDo
    //     // TodoService.retrieveAllTodos(username)
    //     // .then(
    //     //     response => {
    //     //         // console.log(response);
    //     //         this.setState({todos: response.data})
    //     //     }
    //     // )
    //     // console.log(this.state);
    // }

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
        // this.refreshTodos();
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log('ComponentWillUnmount');
        // console.log('nextProps');
        // console.log('nextState');
        return true;
    }

    deleteSelectedToDo(id){
        let username = AuthenticationService.getLoggedInUserName();
        console.log(id + " " + username);
        ToDoService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message : `Deleted todo ${id}`});
                // this.refreshTodos();
            }
        )
    }

    updateSelectedToDo(id){
        // let username = AuthenticationService.getLoggedInUserName();
        console.log('update' + id);
        // /todos/${id}
        this.props.history.push(`/todos/${id}`);
        // ToDoService.deleteTodo(username, id)
        // .then(
        //     response => {
        //         this.setState({message : `Deleted todo ${id}`});
        //         // this.refreshTodos();
        //     }
        // )
    }
    
    render(){
        // console.log('render');
        return(    
        <div>
            <h1> List To-dos</h1>
            {/* {this.state.message && <div className="alert alert-success">{this.state.message}</div>} */}
            <div className="container">
                    <table className="table">
                        <thead>     
                            <tr>
                                {/* <th>id</th> */}
                                <th>Description</th>
                                <th>DoneStatus</th>
                                <th>TargetDate</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead> 
                        <tbody>
                            { 
                                this.state.todos.map(
                                    todo =>
                                    <tr key = {todo.id}>
                                        <>
                                        {/* <td>{todo.username}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateSelectedToDo(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteSelectedToDo(todo.id)}>Delete</button></td>
                                        </>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
        );   
    }
}
export default ListToDosComponent;