import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute } from 'react-router'

import { App } from './components/App';

class A extends Component{
	render(){
		return(
			<div>
				<h1> Awesome ReactNow!</h1>
				<ul>
          		<li><Link to="/about">About</Link></li>
          		<li><Link to="/inbox">Inbox</Link></li>
        		</ul>
				{this.props.children}

			</div>
		);
	}
}

class About extends Component{
	render(){
		return (
			<div>
				About
			</div>
		);
	}
}

class Contact extends Component{
	render(){
		return (
			<div>
				Contact
			</div>
		);
	}
}

class Message extends Component{
	render(){
		return (
			<div>
			jggjfjffj
				Message {this.props.params.id}
			</div>
		);
	}
}
class Inbox extends Component{
	render(){
		return (
			<div>
				Inbox
				
				<Link to="/message/12">Read 12</Link>

			</div>
		); 
	}
}

const routes = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={A}>
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
			<Route path="inbox" component={Inbox}>
				<Route path="message/:id" component={Message} />
			</Route>
		</Route>
	</Router>

);


ReactDOM.render(routes, document.getElementById('react-main-mount'));
