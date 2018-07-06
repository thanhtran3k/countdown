// react component
// component: thanh phan, co the tai su dung o nhieu noi, su dung nhieu component nho de tao nen mot trang web lon.
import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
// i don't need reactDOM anymore because index.js is already covering that.
// Each component has its own local state with respect to the global state of the entire app.
// Just like in the school for example. It has its state of a number of techers, number of students, class rooms. Each student has its own state of number of textbooks, pens,etc...

// Always 'return' in render() method.
class App extends Component {
	// Add state to 'Add' Component.
	// constructor allows us to have local state within class.
	// props argument, we can name this anything we like.
	// SetState comes right from the ReactComponent interface when you look at the react.js node_module.
	constructor(props) {
		super(props);

		// In react, state is always an object
		this.state = {
			deadline: 'February 5, 2019',
			newDeadline: ''
		}
		// console.log(this.props);
	}

	changeDeadline(){
		// important rule to follow whenever updating state is never mutate (change) state directly. The component will not read render.
		// example of mutating state directly: this.state.deadline = 'June 6, 2019'
		// this.setState({
		// 	deadline: 'November 25, 2018'
		// })
		console.log('state', this.state);
		this.setState({deadline: this.state.newDeadline});
	}

	render() {
		return (
			// class is alraedy reserved keyword within javascript
			// having handlers without an anonymous function will cause a loop and crash after.

			// <div class='App'></div>
			<div className="App">
				<div className="App-title">
					Countdown to {this.state.deadline}
				</div>

				<div>
					<Clock
						// example Props
						deadline = {this.state.deadline}
					/>
				</div>

				<div className="field">
					<input placeholder='Enter a new date'
								 onChange = {
									 // event => console.log('event', event.target.value)
									 event => this.setState({newDeadline: event.target.value})
								 }
					/>

					<button onClick = {
						() => {
							console.log('It does work!');
							this.changeDeadline();
						}
					}>Submit</button>

				</div>
			</div>
		);
	}
}

// set as default component.
export default App;
