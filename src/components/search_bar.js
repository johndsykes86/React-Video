import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(){
    super()

    this.state = {term: ''}
  }
//this updates state when the input changes and displays the state in the paragraph element

  handleInputChange(e){
    this.setState({
      term: e.target.value
    })
  }

//onChange handles changes in the input element.
// adding value  makes the input a controlled form element, you can't change it until the value changes via onChange
  render(){
    return(
      <div>
        <input type="text"
          value={this.state.term}
          onChange={this.handleInputChange.bind(this)}/>
        <p>Value of the input: {this.state.term}</p>
      </div>
    )
  }
}

export default SearchBar
