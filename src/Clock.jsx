import React, {Component} from 'react';
import './App.css';


//Use Render Props for Cross-Cutting Concerns: Components are the primary unit of code reuse in React, but it’s not always obvious how to share the state or behavior that one component encapsulates to other components that need that same state.
//props refers some data within the application, with props you pass data or state to child component from parent component.

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0
    }
    // i can use the this.state.deadline from App.jsx
    console.log('this.props', this.props);
  }

  //lifecycle hook
  componentWillMount(){
    //check if the function is working or not.
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    //run after the component completely rendered onto the app
    //call getTimeUntil every seconds
    //run as milisecond
    //every 1000 milisecond
    setInterval(
      () => this.getTimeUntil(this.props.deadline), 1000
    )
  }

  leading0(num){
    // if(num < 10){
    //   return '0' + num;
    // }
    // return num;

    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline){
    //new Date() grabs the current time
    //use the date format of javascript
    let time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);

    //Math.floor(x) returns the value of x rounded down to its nearest integer
    const secs = Math.floor((time/1000) % 60);
    const mins = Math.floor((time/1000/60) % 60);
    const hours = Math.floor((time/(1000*60*60) % 24));
    const days = Math.floor(time/(1000*60*60*24));

    console.log('days', days, 'hours', hours, 'minutes', mins, 'seconds', secs);

    this.setState({
      //key - value
      days: days,
      hours: hours,
      mins: mins,
      secs: secs
    })
  }

  render(){
    return(
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-mins">{this.leading0(this.state.mins)} minutes</div>
        <div className="Clock-secs">{this.leading0(this.state.secs)} seconds</div>
      </div>
    )
  }
}

export default Clock;
