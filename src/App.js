import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import WeatherBox from './WeatherBox/WeatherBox'
class App extends Component {
  constructor(){
    super()
    this.state = {
      searchField: "New York",
      selection: "New York"
    }
  }

  updateSearch = (event) => {
    //updates state when typing in search field
    let searchField = event.target.value
    this.setState({searchField})
  }

  submitForm = (event) => {
    //update state when pressing enter on city
    event.preventDefault()
    let selection = this.state.searchField
    this.setState({selection})
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Super Weather!</h1>
        <Search searchField={this.state.searchField} updateSearch={this.updateSearch} submitForm={this.submitForm}/>
        <WeatherBox searchField={this.state.searchField} selection={this.state.selection}/>
      </div>
    );
  }
}

export default App;
