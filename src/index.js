//This is an example of JS modules. 'react' is the core React library
import React from 'react'

// 'react-dom' is the library that renders JSX to the DOM
import ReactDOM from 'react-dom'

//Create a new component. it should produce some html

const App = () => {
  return <div>Hi!</div>
}


//The produced component should also get inserted into the DOM so we can see it in the browser.

ReactDOM.render(App)
