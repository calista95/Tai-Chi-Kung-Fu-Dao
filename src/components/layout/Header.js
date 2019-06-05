/*component for the navbar*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/Header.css';
import $ from 'jquery';

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', ()=>{
      if (window.scrollY >= 200){
        $('.navbar').css('opacity', '0.95')
      }
      else{
        $('.navbar').css('opacity', '1')
      }
    })

    //toggle bar stuff 
    var collapsed = true; //initialize to collapsed
    $('.navbar-toggler').on('click', function(){
      if (collapsed==true){
       $('.navbar-collapse').show();
        collapsed=false;
      }
      else{
      $('.navbar-collapse').hide();
      collapsed=true;
      }
    })

    $('.nav-item').on('click', function(){
      $('.navbar-collapse').hide();
      collapsed = true;
    })

    $('.dropdown-item').on('click', function(){
      $('.navbar-collapse').hide();
      collapsed = true;
    })


  }
    
  render() {
    return (
      <React.Fragment>  
      {/* header */}
      <div className="headerTitle">Tai Chi Kung Fu Dao <img className="masterZhouPic" src={require('../style/img/logo.JPG')} alt="banner" /></div>  
      <br></br><br></br><br></br>
      {/* navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"> 

        <button className="navbar-toggler" data-target="#collapse_target">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-dark" id="collapse_target">
        <ul className="navbar-nav">
        
          <li><Link className="nav-item" to="/">Home</Link></li>
          <li><Link className="nav-item" to="/About">About</Link></li>
          <li><Link className="nav-item" to="/Instructors">Instructors</Link></li>

          <li className="dropdown">
            <a className=" dropdown-toggle" data-toggle="dropdown" data-target="dropdown_target" href="#">
              Classes
              <span className="caret"></span>
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdown_target">
              <Link className="dropdown-item" to="/MartialArtsProgram">Martial Arts Program</Link>
              <Link className="dropdown-item" to="/LittleDragons">Little Dragons</Link>
              <Link className="dropdown-item" to="/JuniorDragons">Junior Dragons</Link>
              <Link className="dropdown-item" to="/DragonTeam">Dragon Team</Link>
              <Link className="dropdown-item" to="/AdvancedBlackBeltProgram">Advanced</Link>
            </div>
          </li>

          <li className="dropdown">
            <a className=" dropdown-toggle" data-toggle="dropdown" data-target="dropdown_target" href="#">
              Schedule
              <span className="caret"></span>
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdown_target">
              <Link className="dropdown-item" to="/MainSchedule">Main Schedule</Link>
              <Link className="dropdown-item" to="/Holiday">Holiday</Link>
            </div>
          </li>

          <li className="dropdown">
            <a className=" dropdown-toggle" data-toggle="dropdown" data-target="dropdown_target" href="#">
              Gallery
              <span className="caret"></span>
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdown_target">
                <Link className="dropdown-item" to="/Pictures">Pictures</Link>
                <Link className="dropdown-item" to="/Videos">Videos</Link>
            </div>
          </li>

          <li><Link className="nav-item"  to="/Contact">Contact</Link></li>

        </ul>
        </div>
      </nav>

    </React.Fragment>
    )
  }
}






