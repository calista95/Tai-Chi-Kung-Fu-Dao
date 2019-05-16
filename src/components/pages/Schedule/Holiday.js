import React, { Component } from 'react'
import '../../style/Holiday.css'
import Footer from '../../layout/Footer';

export default class Holiday extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="holidayScheduleTitle">Holiday Schedule</div>
            <div className="container">
                <div><img className="mainSchedulePic" src={require('../../style/img/Schedule/HolidaySchedule.JPG')} alt="banner" /></div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
  }
}
