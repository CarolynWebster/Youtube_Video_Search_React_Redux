import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import Keys from './components/secrets'
import VideoDetail from './components/video_detail'

const API_KEY = Keys['YT_KEY']

// Create an app class component
class App extends Component {
    constructor(props){
        super(props);

        this.videoSearch('kittens');

        this.state = { 
            videos: [],
            selectedVideo: null
        };


    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render() {
        //throttles the search so it only updates every 500 ms
        const  videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take compnent's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));