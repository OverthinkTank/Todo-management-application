import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
// import CounterButton from 'react';


class Counter extends Component{
    
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this);
    }
 
    
    render() {
        return (
          <div className="counter">
        <CounterButton  by={1} incrementMethod = {this.increment}/>
        <CounterButton  by={5} incrementMethod = {this.increment}/>
        <CounterButton  by= {10} incrementMethod = {this.increment}/>
        <CounterButton  by={50} incrementMethod = {this.increment}/>
        <CounterButton  by={100} incrementMethod = {this.increment}/>
        <CounterButton  by={200} incrementMethod = {this.increment}/>
        <span className="count">{this.state.counter}</span> 
          </div>
        );
      }
   
    increment = (by) => {
        console.log(`increment from child - ${by} `)
        this.setState({ 
            counter: this.state.counter + by
        });
    
    }
}

class CounterButton extends Component{ 
   //state => counter 0
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this);
    }
    
    // render() {
    render = () => {
        return (
        <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
        </div>
        )
    }

    //update state = counter++
    increment = () => {
        // console.log(`increment from child - ${by}`)
        this.setState({ 
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }

   

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.proptype = {
    by : PropTypes.number
}

export default Counter;