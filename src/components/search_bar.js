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
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleInputChange.bind(this)}/>
        <p>Value of the input: {this.state.term}</p>
      </div>
    )
  }
}

export default SearchBar
