import React, { Component } from 'react'
import '../../style/SummerCamp.css'
import Footer from '../../layout/Footer'

export default class SummerCamp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="summerCamp">Summer Camp</div>
            <div className="container">
                <div className="row">  
                    <div className="col">Lion Dance + Master Zhao <br></br><img className="collage" src={require('../../style/img/Classes/SummerCamp/Collage.png')} alt="banner" /></div>
                    <div className="col">
                        <b>Highlights</b><br></br><br></br>
                        <ul>
                            <li>- Intense Kung Fu Training</li><br></br>
                            <li>- Guest Olympian Kung Fu Master</li><br></br>
                            <li>- Quality enrichment classes with topics such as art, literature, math, Chinese, and leadership</li><br></br>
                        </ul>
                    </div>
                </div> 
                <div className="row">
                    <div className="col">
                    <b>Details</b><br></br><br></br>
                    <ul>
                        <li>- Weekly from June 17 to August 2</li><br></br>
                        <li>- Monday through Friday from 8:30 am to 6:00 pm</li><br></br>
                        <li>- Morning Session 8:30am to 12:00pm
                            <ul>
                                <li>&nbsp; &nbsp;&nbsp; &nbsp;Kung Fu - Form, Lion Dance, Combat</li>
                            </ul>
                        </li><br></br>
                        <li>- Afternoon Session 1:00pm to 6:00pm<br></br>
                            <ul>
                                <li>&nbsp; &nbsp;&nbsp; &nbsp;Enrichment Classes + Kung Fu</li>
                            </ul>
                        </li><br></br>
                        <li>- Open to students ages 5 and up</li><br></br>
                    </ul>
                </div>
                    <div className="col">Master Zhao - Olympian Kung Fu Master<br></br><img className="collage2" src={require('../../style/img/Classes/SummerCamp/Collage2.jpg')} alt="banner" /> </div>
                </div>

                <div className="row">
                    <div className="col">Our enrichment teachers<br></br><img className="collage3" src={require('../../style/img/Classes/SummerCamp/Collage3.JPG')} alt="banner" />   </div>
                    <div className="col">
                        <b>Rates and Application</b><br></br><br></br>
                        <ul>
                            <li>- Morning or Afternoon only $180/wk (current students pay $150)</li><br></br>
                            <li>- All day for a discounted rate of $320/wk (current students pay $280)</li><br></br>
                            <li>- Optional lunch $30/wk</li><br></br>
                            <li>- Prices are valid through May 31, 2019</li><br></br>
                        </ul>
                        <center><a href="https://docs.google.com/forms/d/e/1FAIpQLSdk4JIDTA4hW3rD0fYNtsh94q9vMQfDrTGJewZpYkX92GT1iQ/viewform" className="waves-effect waves-light btn-med blue lighten-4 btn learnMore">Sign Up Here</a></center>
                    </div>
                </div>
            </div>
            <Footer></Footer>
      </React.Fragment>
    )
  }
}
