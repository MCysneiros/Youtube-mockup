import React, { Component } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import { VIdeoDetail } from './components/VIdeoDetail';
import { VideoList } from './components/VideoList';

export default class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('surfboards');
	}

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: { q: term },
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VIdeoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
