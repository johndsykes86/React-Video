import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'
//Youtube API key
const API_KEY = 'AIzaSyD4VKTqZV--iVTiiwuUuXBWz5PN222h-Ww'



//Create a new component. it should produce some html
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
      searchComplete: null
    }
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: null,
        searchComplete: true,
      })
    })
  }



  render(){

      const videoSearch = _.debounce((term)=> { this.videoSearch(term)}, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} completedSearch={this.state.searchComplete}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'))
