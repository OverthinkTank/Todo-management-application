import React , {Component} from 'react';
import { render } from '@testing-library/react';
import './ToDo.css'
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom';

class ToDoApp extends Component{
    render(){
        return(
            <div className = "ToDoApp">My TO- DO Application
                {/* <LoginComponent />
                <WelcomeComponent /> */}
                <Router>
                    <>
                    <Switch>
                        <Route path = "/"  exact  component= {LoginComponent} />
                        <Route path = "/login"  component= {LoginComponent} />
                        <Route path = "/welcome/:name" component= {WelcomeComponent}/>
                        <Route path = "/todos" component= {ListToDosComponent}/>
                        <Route component= {ErrorComponent}/>
                    </Switch>
                    </>
                </Router>

            </div> 
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
        <div>
            Welcome {this.props.match.params.name}. You can manage your To-dos <Link to="/todos">here</Link>
            </div>
        );   
    }
}

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
                <table>
                    <thead>     
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>doneStatus</th>
                            <th>targetDate</th>
                        </tr>
                    </thead> 
                    <tbody>
                        { 
                            this.state.todos.map(
                                todo =>
                                <tr><>
                                    <td>{todo.id}</td>
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
        );   
    }
}

function ErrorComponent(){
        return(
            <div>Some 404 Error occured! Navigate to Welcome page. (I knew you would try this!!)</div>
        );   
}

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'username',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }

    
    handleChange(event){
        // console.log(event.target.name);
        this.setState({
                // username: event.target.value,
                // password: event.target.value
                [event.target.name] : event.target.value
            }
        )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState({
    //             [event.target.name]:event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event){
    //     // console.log(event.target.value);
    //     this.setState({
    //             password:event.target.value
    //         }
    //     )
    // }

    loginClick(){
        if(this.state.username==='username' && this.state.password==='password'){
           // console.log("SUCCESSFUL")
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({showSuccessMessage: true})
            this.setState({ hasLoginFailed: false })        
        }else{
            // console.log("FAILED")
            this.setState({showSuccessMessage: false})
            this.setState({ hasLoginFailed: true })    
        }
        // console.log(this.state)
    }

    render(){
        return(
            <div className = "login">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {/* <ShowLoginSuccessMessage showSuccessMessage= {this.state.showSuccessMessage}/> */}
                {this.state.hasLoginFailed && <div>Login Failed! Please enter username and password in respective fields</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                username <input type = "text" name = "username" value = {this.state.username} onChange={this.handleChange}/>
                Password <input type = "password" name = "password" value = {this.state.password} onChange={this.handleChange}/>
                <button onClick = {this.loginClick} className="loginButton"> Login </button>
            </div>
        );
    }
}

    // function ShowInvalidCredentials(props){
    //         if(props.hasLoginFailed){
    //             return <div>Login Failed! Please enter username and password in respective fields</div>
    //         }
    //         return null
    // }

    // function ShowLoginSuccessMessage(props){
    //     if(props.showSuccessMessage){
    //         return <div>Login Successful</div>
    //     }
    //     return null
    // }

export default ToDoApp;