import React, { Component } from 'react'
import '../../style/AdvancedBlackBelt.css'
import Footer from '../../layout/Footer'

export default class Advanced extends Component {
  render() {
    return (
      <React.Fragment>   
        <div className="advancedTitle">Advanced Black Belt Program</div>
        <div className="container">
          <div className="row advanced">
            &nbsp; &nbsp;The Black Belt is a symbol of honor, earned only through hard work and dedication. 
            Students who complete our Black Belt program have demonstrated a solid understanding of 
            the practice and performance of a wide variety of Chinese martial arts. This is a considerable 
            achievement, but for some students the Black Belt is only the first step toward a 
            deeper mastery of Wushu. <br></br><br></br>
            &nbsp; &nbsp;These dedicated students can cultivate a more comprehensive understanding of 
            International Wushu by continuing their study with our Advanced Program. 
            Progress through the nine degrees of this program requires refinement of personal 
            behavior and leadership ability, in addition to a deeper mastery of technical skills 
            and theoretical knowledge. <br></br><br></br>
          </div>
          <div className="row justify-content-center">
            <img className="BlackBeltPic" src={require('../../style/img/Classes/BlackBelt.JPG')} alt="banner" />
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    )
  }
}
