import React, { Component } from 'react';

class ReactLifeCycle extends Component {

	constructor(props) {
		super(props);
		alert('constructor');
		this.state = {
			backgroundColor : 'red'
		}
		this.update = this.update.bind(this);
	}

	componentWillMount() {
		alert('Component is about to mount');
	}

	componentDidMount() {
		alert('Component has just mounted');
	}

	update() {
		this.setState({
			backgroundColor : 'green'
		});
	}

	componentWillReceiveProps() {
		alert('Component will receive props');
	}

	shouldComponentUpdate() {
		alert('shouldComponentUpdate');	
		return true;
		//return false;
	}

	componentWillUpdate() {
		alert('Component is about to Update');
	}

	componentDidUpdate() {
		alert('Component has just Updated');
	}

	componentWillUnmount() {
		//This method is called when a component is being removed from the DOM:
		alert('componentWillUnmount');
	}

	componentDidCatch() {
		// This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
		alert('componentDidCatch');
	}

	render() {
		alert('render');
		return (
			<div style={this.state}
				 onClick={this.update}> 
				 This is example of react ReactLifeCycle 
			</div>
		)
	}
}

export default ReactLifeCycle;