import axios from 'axios';

class HelloWorldService{

    executeHelloWorldService(){
        // console.log("HelloWorldService Executed");
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService(){
        // console.log("HelloWorldService Executed");
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name){
        // console.log("HelloWorldService Executed");
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }

}

export default new HelloWorldService();