import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FirstComponent from './component/learning-example/FirstComponent';
// import SecondComponent from './component/learning-example/SecondComponent';
// import  ThirdComponent from './component/learning-example/ThirdComponent';
// import Counter from './component/counter/Counter';
import ToDo from './component/ToDo/ToDoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LearningComponents/>
      </div>
    );
  }
}


class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
        {/* To-Do Application */}
        {/* <FirstComponent />
        <SecondComponent/>
        <ThirdComponent/> 
        <CounterButton  by={1}/>
        <CounterButton  by={5}/>
        <CounterButton  by= {10}/>
        <CounterButton  by={50}/>
        <CounterButton  by={100}/>
        <CounterButton  by={200}/> */}
        {/* <Counter /> */}
        <ToDo />
      </div> 

    );
  }
}

export default App;
