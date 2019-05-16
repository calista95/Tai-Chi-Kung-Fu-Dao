import React, { Component } from 'react'
import '../style/Home.css';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

export default class Home extends Component {

  render() {
    return (
    <React.Fragment>
        <div className="homePic">  
          <div className="container">
            <div className="row homeMessage justify-content-center">Health, Harmony, Happiness</div>
            <div className="row justify-content-center">
              <a className="waves-effect waves-light btn-med blue darken-4 btn learnMore"><Link to = "/About">Learn More</Link></a>
              <a className="waves-effect waves-light btn-med blue darken-4 btn learnMore"><Link to = "/SummerCamp">Summer Camp</Link></a>
            </div>
          </div>
        </div>
        <div className="container homeWelcome">
          <div className="row justify-content-center title"><b>Welcome!</b></div>
          <div className="row">
            We shall try our best to help every student 
            to achieve his or her goals. Through the learning of the Chinese Kung Fu and Tai Chi, 
            students shall strengthen physical and self-defense capabilities, reduce stress from work and 
            study, cultivate character and internal happiness, and improve quality of life. We have developed 
            training programs for different age groups, and we welcome students of all ages to join us and benefit
            from the training. We look forward to building a harmonious, healthy and happy Kung Fu family 
            along with all our students. 
          </div>
          <div className="row justify-content-center title"><b>Referral Program</b></div>
          <div className="row">
          Dear families, <br></br><br></br>
            As our school grows, we are pleased to notice many new students have been referred by existing 
            students.  We would like to start rewarding families for referrals.
            If you refer a student that contacts us, you will receive a free uniform shirt. 
            If the referred student signs up for classes, you will receive 10% off your next renewal!
            We will be asking all new students where they heard of our school, and be sure to let us know 
            when you are sending someone our way so we can show you our appreciation.
            Thank you! <br></br><br></br>
            - Chinese Kung Fu Development Center
          </div>
          <div className="row justify-content-center title"><b>Summer Day Camp</b></div>
          <div className="row">
          Summer is just around the corner. Our Kung Fu Summer Camp is just a few weeks away! Did you sign up yet? 
          Our All-Day Camp is only $280/week for current students, which is a steal considering you get 3+ hours of Kung Fu 
          Training every day and quality enrichment classes on 6 different subjects a week! Don't get caught stuck at 
          home in the summer and sign up today! Invite your friends and earn raffle tickets for some awesome prizes too!
          </div>
          <div className="row"><Link to = "/SummerCamp">Learn More</Link></div>
          <div className="row"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdk4JIDTA4hW3rD0fYNtsh94q9vMQfDrTGJewZpYkX92GT1iQ/viewform">Sign up here</a></div>
        </div>
        <Footer></Footer>
    </React.Fragment>
    )
  }
}




