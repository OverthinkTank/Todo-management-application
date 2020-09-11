import React , {Component} from 'react';
// import { render } from '@testing-library/react';
import './ToDo.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import ListToDosComponent from './ListToDosComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import TodoComponent from './ToDoComponent';

class ToDoApp extends Component{
    render(){
        return(
            <div className = "ToDoApp">
                {/* <LoginComponent />
                <WelcomeComponent /> */}
                
                <Router>
                    <>
                    <HeaderComponent />
                    <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            {/* We moved this to top as it was mathcing with /todos - so increased it's priority */}
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListToDosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent />
                    </>
                </Router>

            </div> 
        )
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