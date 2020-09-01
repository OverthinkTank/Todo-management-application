import Axios from "axios";

import axios from 'axios';

class HelloWorldService{

    executeHelloWorldService(){
        // console.log("HelloWorldService Executed");
        return axios.get('http://localhost:8080/hello-world');
    }

}

export default new HelloWorldService();