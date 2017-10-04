import React from 'react'
import { Menu } from 'semantic-ui-react'
import DaysContainer from './components/DaysContainer'

export default class WeatherBox extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [],
      location: "New York",
      activeTemp: "F"
    }
  }

  componentDidMount(){
    this.fetchHandler(this.props.searchField, this.props.selection)
  }

  componentWillReceiveProps(nextProps){
    this.fetchHandler(nextProps.searchField, nextProps.selection)
  }

  fetchHandler = (searchField, selection) => {
    //handles fetch request to api and updates state

    if(selection === searchField){
      fetch(`http://api.aerisapi.com/places/search?query=name:${selection},country:us&limit=10&client_id=OotpWAGbWVCd6dsDPxkbG&client_secret=YIBo2h6KDfURQdrs83NYZAIvKgcj0YyGrEnRBgYp`).then(resp => resp.json())
      .then(resp => {

        if(resp.response.length !== 0){
          this.setState({ location: resp.response[0].place.name})
          let url = `http://api.aerisapi.com/forecasts/${resp.response[0].place.name},${resp.response[0].place.state}?client_id=OotpWAGbWVCd6dsDPxkbG&client_secret=YIBo2h6KDfURQdrs83NYZAIvKgcj0YyGrEnRBgYp`
          fetch(url).then(resp => resp.json())
          .then(data => {
            this.setState({
              data: data.response[0].periods
            })
          })
        }
      })
    }
  }

  changeActiveTemp = (e, { name }) => {
    //changes state of active temp between Fahrenheit and Celsius
    if(name === "Fahrenheit"){
      this.setState({ activeTemp: "F"})
    }else if(name === "Celsius"){
      this.setState({ activeTemp: "C"})
    }
  }


  render(){
    return(
      <div>
      <h1>Weather for {this.state.location}</h1>
      <Menu>
       <Menu.Item
         name='Fahrenheit'
         active={this.state.activeTemp === 'F'}
         onClick={this.changeActiveTemp}
       />
       <Menu.Item
         name='Celsius'
         active={this.state.activeTemp === 'C'}
         onClick={this.changeActiveTemp}
       />
     </Menu>

        <DaysContainer data={this.state.data} activeTemp={this.state.activeTemp}/>
      </div>
    )
  }
}
