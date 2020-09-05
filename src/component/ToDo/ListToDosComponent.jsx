import React , {Component} from 'react';
import TodoService from '../../api/todo/ToDoService';
import AuthenticationService from '../ToDo/AuthenticationService'

class ListToDosComponent extends Component{
    constructor(props){
        console.log('constructor');
        super(props)
        this.state = {
            todos: [

            ]
        }
    }

                // {id : 1 , description: 'Learn React', done: false , targetdate: new Date()},
                // {id : 2 , description: 'Learn React2', done: false , targetdate: new Date()},
                // {id : 3 , description: 'Learn React3', done: false , targetdate: new Date()}
    componentDidMount(){
        console.log('ComponentDidMount');
        let username = AuthenticationService.getLoggedInUserName();
        TodoService.retrieveAllTodos(username)
        .then(
            response => {
                // console.log(response);
                this.setState({todos: response.data})
            }
        )
        
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('ComponentWillUnmount');
        console.log('nextProps');
        console.log('nextState');
        return true;
    }
    
    render(){
        console.log('render');
        return(    
        <div>
            <h1> List To-dos</h1>
            <div className="container">
                    <table className="table">
                        <thead>     
                            <tr>
                                {/* <th>id</th> */}
                                <th>Description</th>
                                <th>DoneStatus</th>
                                <th>TargetDate</th>
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