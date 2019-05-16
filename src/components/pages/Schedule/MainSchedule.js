import React, { Component } from 'react'
import '../../style/MainSchedule.css'
import Footer from '../../layout/Footer';

export default class MainSchedule extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="mainScheduleTitle">Main Schedule</div>
            <div className="container">
                <div className="row"><img className="mainSchedulePic" src={require('../../style/img/Schedule/MainSchedule.JPG')} alt="banner" /></div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
  }
}
   