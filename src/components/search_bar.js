import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(){
    super()

    this.state = {term: ''}
  }
//this updates state when the input changes and displays the state in the paragraph element

  onInputChange(term){
    this.props.onSearchTermChange(term)
    this.setState({term})
  }

//onChange handles changes in the input element.
// adding value  makes the input a controlled form element, you can't change it until the value changes via onChange
  render(){
    return(
      <div className='search-bar'>
        <input type="text"
          value={this.state.term}
          onChange={(event)=> this.onInputChange(event.target.value)} placeholder="Search"/>

      </div>
    )
  }
}

export default SearchBar
