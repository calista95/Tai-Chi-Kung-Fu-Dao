import React from 'react'
import '../style/About.css';
import Footer from '../layout/Footer';

export default function About() {
  return (
    <React.Fragment>
       <div className="aboutUs">About Us</div>
       <div className="container">
          <div className="row aboutTCKF">
              <div className="col about">
               Tai Chi Kung Fu Dao (formerly Chinese Kung Fu Development Center) is an organization dedicated to the promotion of traditional Chinese martial arts 
               that is also adapted to the needs of modern sports and wellness. Exploration, performance and learning of traditional Chinese martial arts are the
               key activities of the organization.  Chinese martial arts (“Wushu” in Chinese) are characterized with the fine movement of the limbs, body fluids
               as well as energy meridians.  It is for health, fitness and mind-cultivation.  It is not only a sport but also the carrier of the essence of 
               traditional Chinese culture. It helps to establish an active and positive life style, and inspire the realization of an individual’s highest potential.
               We uphold a harmonious, healthy and happy teaching philosophy. 
               We strive to mobilize the potential of every student to pursue excellence in athletic ability. 
               Our goal is to help our students develop their physical, mental, athletic and social capabilities, enrich their life style and realize the value of life. Our goal: harmony, health and happiness.
              </div>
              <div className="col">
                  <center><img src={require('../style/img/grouppic.JPG')} alt="group picture" /></center>
              </div> 
          </div>
          <div className="row aboutTitle">What is Chinese Kung Fu?</div>
          <div className="row about">
                Chinese Kung Fu is more than simply self-defense; it is a way to learn self-discipline, self control, and perseverance. 
                It is the continuous improvement of good health and wellness through traditional sets of martial arts movements, called forms. 
                Chinese Kung Fu increases strength, flexibility, and health and reduces stress. Students build character and values through school 
                training and community events.
          </div>
              
          <div className="row aboutTitle">What is Tai Chi?</div>
          <div className="row about">
              Tai Chi (taiji) flourishes in Chinese traditional culture. It is a unique martial art that develops internal Qi (energy) to improve health and develop spiritual, physical and intellectual balance. It is a beautiful and artistic activity that helps reduce tension, stress and anxiety. The mind and body work together to achieve physical and spiritual strength, calmness and harmony.
          </div>
        </div>
        <Footer></Footer>
    </React.Fragment>
  )
}   

