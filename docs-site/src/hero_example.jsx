import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class HeroExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <DatePicker
      dateFormatIsSplit={true}
      previousYearButtonText="Prev"
      nextYearButtonText="Next"
      previousMonthButtonText="Prev"
      nextMonthButtonText="Next"
      dateFormat="DD / MM / YYYY"
      selected={this.state.startDate}
      onChange={this.handleChange} />
  }
}
