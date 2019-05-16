import React, { Component } from 'react'
import '../../style/MartialArtsProgram.css'
import Footer from '../../layout/Footer'

export default class MartialArtsProgram extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="martialArtsProgram">Martial Arts Program</div>  
        <div className="container">
            <div className="row introToMartialArtsTitle">Introduction to Our Martial Arts Program</div>
            <div className="row introToMartialArts">
                &nbsp; &nbsp;At the Chinese Kung Fu Development Center, we train our students for the purposes of 
                building health, achieving harmony and cultivating happiness, in themselves and in 
                the wider world. For each student to achieve these goals, we teach a complete set of forms 
                that build skills in a wide variety of movements and techniques that provide a firm foundation 
                in the practice of kung fu. <br></br><br></br>
                &nbsp; &nbsp;Our aim is for students to fully master the precious weapons of self-cultivation; the true meaning of 
                learning martial arts with us is to make friends, while achieving the highest state of a harmonious, 
                healthy and happy life. <br></br><br></br>
            </div> 
            <div className="row introToMartialArtsTitle">The Importance of Traditional Forms in Kung Fu</div>
            <div className="row introToMartialArts">
                &nbsp; &nbsp; Traditional Kung Fu  forms connect different movements that are based on combat skills. 
                Each movement has a purpose, whether to win a match offensively or provide defensive movements 
                from an attack.  Traditional Chinese philosophy discourages the use of fighting as it is considered 
                uncultured.  Historically, the teachers of Kung Fu created these forms to weaken aggressive desires 
                in individuals so that order and balance in society could be maintained. <br></br><br></br>
                &nbsp; &nbsp; When experts practice their Kung Fu forms, they do not need an actual enemy to practice combat, 
                they focus on how to find each movement’s core and how to achieve perfect balance.  A technique to 
                fight and defeat an enemy does not serve to promote peace for all human beings in the world. 
                The Kung Fu form is characterized by balance of the whole body, a calm mind, integrated breathing, 
                and the extension of natural energies.  The Kung Fu form is flowing and graceful. <br></br><br></br>
            </div>
            <div className="row introToMartialArtsTitle">Our Black Belt Program</div>
            <div className="row introToMartialArts">
                &nbsp; &nbsp;Our main program progresses from White to Black Belt. At each level a new form 
                is learned, with its own methods, techniques, and philosophy. As students progress through this 
                program, they gain physical strength and coordination, as well as focus and discipline. 
                A student who earns the Black Belt has a strong foundation in Wushu, and has developed 
                considerable physical skills and mental focus. <br></br><br></br>
            </div>
            <div className="row justify-content-center"><img src={require('../../style/img/Classes/MartialArtsProgram/BlackBeltChart.JPG')} alt="banner" /></div>
            <div className="row">
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/WhiteBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/YellowBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/YellowBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/GreenBlackBelt.png')} alt="banner" /></div>
            </div>
            <div className="row">
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/GreenBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/PurpleBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/PurpleBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/BlueBlackBelt.png')} alt="banner" /></div>
            </div>
            <div className="row">
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/BlueBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/BrownBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/BrownBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/OrangeBlackBelt.png')} alt="banner" /></div>
            </div>
            <div className="row">
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/OrangeBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/RedBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/RedBlackBelt.png')} alt="banner" /></div>
              <div className="col"><img src={require('../../style/img/Classes/MartialArtsProgram/BlackBelt.png')} alt="banner" /></div>
            </div>
        </div>
        <Footer></Footer>
        </React.Fragment>
    ) 
  }
}
