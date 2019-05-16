import React, { Component } from 'react'
import '../../style/JuniorDragons.css'
import Footer from '../../layout/Footer'

export default class JuniorDragons extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="juniorDragonsTitle">Junior Dragons (ages 6-10)</div>
        <div className="container">
          <div className="row juniorDragons">
            &nbsp; &nbsp;The goal of the Junior Dragons classes is to develop a positive attitude 
            toward physical accomplishment through safe, strong, and accurate martial 
            arts training. The Junior Dragons curriculum is designed to promote:
            <ol>
              <li>strength, </li>
              <li>flexibility, </li>
              <li> and muscle development.</li>
            </ol>
            &nbsp; &nbsp; As Junior Dragons progress in 
            their training, the self defense program will adjust to the physical size and 
            development of their bodies. Weapons are introduced at an early stage of training 
            to enhance the understanding of various Kung Fu forms. <br></br><br></br>
            &nbsp; &nbsp;We believe that all children are capable and ingenious individuals. Chinese Kung Fu 
            is a medium for kids to explore and build on their physical, mental and emotional 
            capabilities. It is sport that presents challenges in new and exciting formats that 
            is pure fun for kids. The developmental skills gained through taking Kung Fu classes 
            lay the foundation for many other sports. In addition, the personal lessons learned 
            through goal setting, perseverance and self reflection are useful for a lifetime of adventures. <br></br><br></br>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    )
  }
}
