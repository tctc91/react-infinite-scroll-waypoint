import React, { Component } from 'react';

// import InfiniteScroll from 'react-infinite-scroll-waypoint'; npm link version
import InfiniteScroll from './InfiniteScroll';

import logo from './logo.svg';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			items: this.newItems
		}
	}

	get newItems() {
		return (
			[
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
				{ title: 'lorem ipsum' },
			]
		)
	}

	getItems() {
		this.setState({ loading: true });

		setTimeout(() => {
			this.setState({
				items: [...this.state.items, ...this.newItems],
				loading: false
			});
		}, 1200);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React Infinite Scroll Waypoint</h1>
				</header>
				<section className="App-intro">
					<InfiniteScroll
						componentTagName="div"
						scrollElementName="App-intro"
						loading={this.state.loading}
						currentPage={1}
						clickToUpdate={false}
						hasMore={true}
						onUpdate={() => this.getItems()}
					>
						<ul>
							{this.state.items.map((item, idx) => 
								<li key={idx + item.title}>{item.title}</li>
							)}
						</ul>
					</InfiniteScroll>
				</section>
			</div>
		);
	}
}

export default App;
