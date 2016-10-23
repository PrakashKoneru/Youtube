import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyD_5s_mmXSn1AumQlGEcqhxAwsoKHQEoZA'; 



class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo:null 
		};

		this.videoSearch("Beat It Micheal Jackson");
	}

	videoSearch(term) {
		YTSearch({key : API_KEY, term : term}, (videos) => {
			this.setState({ 
				videos,
				selectedVideo:videos[0] 
			});
		});


	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos}/>
			</div>
		);
	}


}

ReactDOM.render(<App />, document.querySelector('.container'));

