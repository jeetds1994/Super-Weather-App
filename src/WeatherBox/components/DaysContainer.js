import React from 'react'
import DayContainer from './DayContainer'
import { Accordion } from 'semantic-ui-react'


export default class DaysContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      activeIndex: 0
    }
  }

  handleClick = (e, titleProps) => {
    //handles changes state when clicking Accordion
      this.setState({ activeIndex: titleProps.index })
  }


  render(){
    let periods = this.props.data.map((period, index) => {
      return <DayContainer key={index} index={index} period={period} handleClick={this.handleClick} activeIndex={this.state.activeIndex} activeTemp={this.props.activeTemp}/>
    })
    return(
      <div>
       <Accordion styled fluid="true">
          {periods}
        </Accordion>
      </div>
    )
  }
}
