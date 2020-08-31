import React , {Component} from 'react';
// import {Route, Redirect} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

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
           console.log("SUCCESSFUL")
           AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
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
            <div>
                <h1> Login </h1>
                {/* <div className = "login"> */}
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {/* <ShowLoginSuccessMessage showSuccessMessage= {this.state.showSuccessMessage}/> */}

                    {this.state.hasLoginFailed && <div className = "alert alert-warning">Login Failed! Please enter username and password in respective fields</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name <input type = "text" name = "username" value = {this.state.username} onChange={this.handleChange}/>
                    Password <input type = "password" name = "password" value = {this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick = {this.loginClick}> Login </button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;