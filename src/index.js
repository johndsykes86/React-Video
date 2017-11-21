//This is an example of JS modules. 'react' is the core React library
import React from 'react'

// 'react-dom' is the library that renders JSX to the DOM
import ReactDOM from 'react-dom'

//importing SearchBar components using a relative path
import SearchBar from './components/search_bar'

//Youtube API key
const API_KEY = 'AIzaSyD4VKTqZV--iVTiiwuUuXBWz5PN222h-Ww'
const userName = "Johnathon"

//Create a new component. it should produce some html
const App = () => {
  return (
    <div>
      <SearchBar default={`Hello, ${userName}`}/>
    </div>
  )
}


//The produced component should also get inserted into the DOM so we can see it in the browser. .render() takes two arguments
// the first argument: the <> wraps the const App into an instance.
// second: Targets where the returned instance should be rendered
ReactDOM.render(<App/>, document.querySelector('.container'))
