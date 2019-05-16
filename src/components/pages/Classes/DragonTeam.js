import React, { Component } from 'react'
import '../../style/DragonTeam.css'
import Footer from '../../layout/Footer'

export default class DragonTeam extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="dragonTeamTitle">Dragon Team (ages 13+)</div>
        <div className="container">
          <div className="row justify-content-center">  
          </div>
          <div className="row dragonTeam">
          &nbsp; &nbsp;The dragon team is for college bound athletes who demonstrate sustained achievement 
          throughout their training. Dragon training will nurture leadership skills, character, 
          and motivation. By developing the whole person, we will cultivate tenacity, initiative, 
          responsibility, insight, maturity, respect and concern for others. With confidence and 
          concentration, our athletes will exhibit intellectual independence, originality, and a 
          healthy sense of community. Dragons are encouraged to join the kung fu team to train for 
          international kung fu standards of competition which may qualify them for scholarships. <br></br><br></br>
          &nbsp; &nbsp;It is our desire to promote an atmosphere of family and a martial arts community that mutually supports Kung Fu 
          philosophy and spirituality. We want our members to take a disciplined approach to the respect of self and others. 
          Our program is designed to help our students access their inner strength, build confidence and healthy self-esteem 
          to achieve a balanced life, and make positive contributions to the world around them. <br></br><br></br>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>

    )
  }
}
