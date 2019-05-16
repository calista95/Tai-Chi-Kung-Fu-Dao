import React, { Component } from 'react'
import '../../style/LittleDragons.css'
import Footer from '../../layout/Footer'

export default class LittleDragons extends Component {
  render() {
    return (
      <React.Fragment>  
        <div className="littleDragonsTitle">Little Dragons (ages 3-6)</div>
        <div className="container">
          <div className="row littleDragons">
            &nbsp; &nbsp;Our little dragon program is designed for young children and encourages the 
            development of self-confidence, strength, coordination, motor skills, and personal 
            awareness. The children explore and expand their individual abilities, as well as social 
            and listening skills, while learning in a safe, positive, and fun atmosphere. <br></br><br></br>
            &nbsp; &nbsp;At the Chinese Kungfu Development Center, we work individually with each on five 
            different basic martial arts skills: <br></br><br></br>
            &nbsp; &nbsp;1) kicking techniques, <br></br>  
            &nbsp; &nbsp;2) punching techniques, <br></br>
            &nbsp; &nbsp;3) rotating jumping, <br></br>
            &nbsp; &nbsp;4) tumbling routines and <br></br>
            &nbsp; &nbsp;5) learning traditional Kung Fu forms. <br></br><br></br>
            &nbsp; &nbsp;The art of Kung Fu requires balance, body control and physical strength, 
            as well as the mental strength to maintain focus and concentration at all times. 
            Learning Chinese martial arts requires a lot of practice and training, 
            but if your child enjoys excitement and challenge, then he or she will truly love the study of Kung Fu.
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    )
  }
}
