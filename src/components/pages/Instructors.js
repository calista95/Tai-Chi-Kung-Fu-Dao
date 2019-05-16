import React from 'react'
import '../style/Instructors.css';
import Footer from '../layout/Footer';

export default function Instructors() {
  return (
    <React.Fragment>
        <div className="instructorTitle">Instructors</div>
        <div className="container">    
                    <div className="row">
                        <div className="col">
                            <img className="masterZhouPic" src={require('../style/img/Instructors/masterzhou.JPG')} alt="banner" />
                        </div>
                        <div className="col">
                            <b><p className="instructorsTitle">Master Chaunwang Zhou</p></b>
                            <p className="masterZhouBio">
                                    Master Chuanwang Zhou has over 20 years of experience teaching Kung Fu and Tai Chi to all ages. 
                                    He had been an instructor for ShanDong Taishan Wushu (martial arts) Team for 10 years.  
                                    He is considered one of the best of national level instructors and judges in China.
                                    <br></br><br></br>
                                    <b>Background:</b>
                                    <br></br>
                                    Master Chuanwang Zhou started to learn Shaolin Kungfu at the age of 6 years old. 
                                    He studied Kungfu at Shandong Martial Arts School, Shaolin temple, and Shandong Wushu Team. 
                                    He graduated from Physical Education University of Beijing in China.  He worked on many movies as a martial arts specialist and 
                                    choreographer. He was invited to several countries, such as Australia, Canada, the United States, and the Philippines 
                                    to perform martial arts and Shaolin Kungfu.
                                    <br></br><br></br>
                                    <b>Achievements:</b>
                                    <br></br>
                                    In his career, Master Zhou was the champion in several large international WuShu (Martial Art) competitions. 
                                    His is especially excellent in Straight Sword and Mantis Fist style of  Kung Fu.  
                                    Master Chuanwang Zhou published many papers about the disciplines on training and grasping the Sword style in major magazines and newspapers. 
                                    Master Chuanwang Zhou was awarded the title of top national instructor in China for many years. His students won many 
                                    national and international championships in WuShu (Martial Art) competitions.
                            </p>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="col">
                            <b><p className="instructorsTitle">Junior Instructors</p></b>
                            <ul>
                                <li>Nicholas Sun</li>
                                <li>Andrew Zhou</li>
                            </ul>
                        </div>
                        <div className="col">
                            <b><p className="instructorsTitle">Teacher's Assistants</p></b>
                            <ul>
                                <li>Phong Ly</li>
                                <li>Anthony Nguyen</li>
                            </ul>
                        </div>
                    </div>

        </div>
        <Footer></Footer>
    </React.Fragment>
  )
}

