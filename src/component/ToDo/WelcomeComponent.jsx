import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';
// import HelloWorldBeanService from '../../api/todo/HelloWorldService.js';


class WelcomeComponent extends Component{
    constructor(props){
        super(props);
        
        this.retrieveMessage= this.retrieveMessage.bind(this);
        this.state = {
            welcomeMessage : ''
        }

        this.handleSuccessfulResponse= this.handleSuccessfulResponse.bind(this);
        this.handleErrorResponse= this.handleErrorResponse.bind(this);

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

                    <button onClick={this.retrieveMessage} className="btn btn-success"> Get Welcome Message </button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );   
    }

    retrieveMessage(){
        // console.log("Hello User, you have clicked on welcome button");
        // HelloWorldService.executeHelloWorldService()
        // .then(response => 
        //     {// console.log(response); 
        //         this.handleSuccessfulResponse(response);
        //     })
        // .catch()

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => 
        //     {
        //         // console.log(response);
        //         this.handleSuccessfulResponse(response);
        //     })
        // .catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => 
            {
                // console.log(response);
                this.handleSuccessfulResponse(response);
            })
        .catch(error => this.handleErrorResponse(error))
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data.message})
    }

    handleErrorResponse(error){
        this.setState({welcomeMessage: error.response.data.message})
        // console.log(error.response.message);
    }


}

export default WelcomeComponent;