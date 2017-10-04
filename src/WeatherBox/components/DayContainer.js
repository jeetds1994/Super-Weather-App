import React from 'react'
import { Accordion, Icon, Table, Header } from 'semantic-ui-react'


const DayContainer = ({period, index, handleClick, activeIndex, activeTemp}) => {

  //data of variables to display
  let icon = "icons/" + period.icon
  let date = String(new Date(period.validTime)).slice(0,15)
  let maxTemp = activeTemp === "F" ? period.maxTempF : period.maxTempC
  let minTemp = activeTemp === "F" ? period.minTempF : period.minTempC
  let feelsLike = activeTemp === "F" ? period.feelslikeF : period.feelslikeC
  let humidity = period.humidity
  let weather = period.weather

  return(
    <div>
      <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
          <Icon name='dropdown' />
          {date}
      </Accordion.Title>
      <Accordion.Content active={activeIndex === index}>
      <div className="ui grid">
        <div className="eight wide column">
          <h1>{weather}</h1>
          <img src={icon} id="weather_icon" alt={weather} id="todayWeatherIcon"/>
        </div>


        <div className="eight wide column">
        <h1>Weather Stats:</h1>
        <Table basic='very' celled collapsing id="weather_stats">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Subject</Table.HeaderCell>
              <Table.HeaderCell>Temp</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>

                  <Header.Content>
                      High:
                  </Header.Content>
              </Table.Cell>
              <Table.Cell>
                  {maxTemp}
              </Table.Cell>
            </Table.Row>


            <Table.Row>
              <Table.Cell>

                  <Header.Content>
                      Low:
                  </Header.Content>
              </Table.Cell>
              <Table.Cell>
                  {minTemp}
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>

                  <Header.Content>
                      Feels Like:
                  </Header.Content>
              </Table.Cell>
              <Table.Cell>
                  {feelsLike}
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>

                  <Header.Content>
                      Humidity:
                  </Header.Content>
              </Table.Cell>
              <Table.Cell>
                  {humidity}
              </Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
        </div>
      </div>
        </Accordion.Content>
    </div>
  )
}

export default DayContainer
