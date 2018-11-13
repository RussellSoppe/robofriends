import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
	constructor (){
		super()
		this.state={
			robots: [],
			searchfield: ""
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users') // https://jsonplaceholder.typicode.com/users or? //https://swapi.co/api/people/ 
	.then(response => {
		return response.json();
	})
	.then(anynamehereusers =>{
		this.setState({robots: anynamehereusers})
	})
}

onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

render() {
	
	const filterrobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
			
	return (

		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<Cardlist robots={filterrobots}/>
			</Scroll>
		</div>

		);
}}

export default App;