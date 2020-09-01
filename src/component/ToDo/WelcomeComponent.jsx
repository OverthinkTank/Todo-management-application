import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component{
    constructor(props){
        super(props);
        
        this.retrieveMessage= this.retrieveMessage.bind(this);

    }
    
    render(){
        return(
            <>
            <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your Todos here  <Link to="/todos">Go to MyTodos</Link>
                </div>

                <div className="container">
                    Click button to get customized message      
                    <button onClick={this.retrieveMessage} className="btn btn-success"> myButton </button>
                </div>
            </>
        );   
    }

    retrieveMessage(){
        // console.log("Hello User, you have clicked on welcome button");
        HelloWorldService.executeHelloWorldService()
        .then()
        .catch()
    }
}

export default WelcomeComponent;