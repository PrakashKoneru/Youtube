import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD_5s_mmXSn1AumQlGEcqhxAwsoKHQEoZA'; 



class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key : API_KEY, term : "surface"}, (videos) => {
			this.setState({ videos });
			console.log(videos);
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos}/>
			</div>
		);
	}


}

ReactDOM.render(<App />, document.querySelector('.container'));
