import React , {Component} from 'react';



class ListToDosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {id : 1 , description: 'Learn React', done: false , targetdate: new Date()},
                {id : 2 , description: 'Learn React2', done: false , targetdate: new Date()},
                {id : 3 , description: 'Learn React3', done: false , targetdate: new Date()}
            ]
        }
    }
    
    render(){
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

                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetdate.toString()}</td>
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