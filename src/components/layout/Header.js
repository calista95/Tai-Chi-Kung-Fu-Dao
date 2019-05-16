/*component for the navbar*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/Header.css';
import $ from 'jquery';

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', ()=>{
      if (window.scrollY >= 200){
        $('.navbar').css('top', '0');
        $('.navbar').css('opacity', '0.85');
        let width = getWidth();
        if (width < 503){
          console.log("threshold reached")
          $('.headerTitle').css("display", "none");
        }
        else{
          $('.menuItems').css("display", "inline");
        }

      }
      else{
        $(".headerTitle").css("display", "inline");
        $('.logo').css("display", "none");
        $('.navbar').css('top', '70px');
        $('.navbar').css('opacity', '1');
      }
    });
  }   
  render() {
    return (
      <React.Fragment>  
      <div className="headerTitle">Tai Chi Kung Fu Dao <img className="masterZhouPic" src={require('../style/img/logo.JPG')} alt="banner" />
      </div>  

      <br></br><br></br><br></br>
      

      <nav className="navbar navbar-default">
        <div className="container-fluid">

          {/* menu items */}
          <div className="menuItems">
            <ul>
            <li><Link className="nav-link homeLink" to="/">Home</Link></li>
              <li><Link className="nav-link aboutLink" to="/About">About</Link></li>
              <li><Link className="nav-link instructorsLink" to="/Instructors">Instructors</Link></li>
              <li className="nav-item dropdown classesLink">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Classes
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/MartialArtsProgram">Martial Arts Program</Link>
                  <Link className="dropdown-item" to="/LittleDragons">Little Dragons</Link>
                  <Link className="dropdown-item" to="/JuniorDragons">Junior Dragons</Link>
                  <Link className="dropdown-item" to="/DragonTeam">Dragon Team</Link>
                  <Link className="dropdown-item" to="/AdvancedBlackBeltProgram">Advanced</Link>
                </div>
              </li>   
              <li className="nav-item dropdown scheduleLink">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Schedule
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/MainSchedule">Main Schedule</Link>
                  <Link to="/Holiday">Holiday</Link>
                </div>
              </li>
              <li className="nav-item dropdown galleryLink">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Gallery
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/Pictures">Pictures</Link>
                  <Link to="/Videos">Videos</Link>
                </div>
              </li>
              <li><Link className="nav-link contactLink" to="/Contact">Contact</Link></li>
            </ul>
          </div>
          {/* end of menu items */}

        </div>
      </nav>
      

      <br></br><br></br><br></br>
    </React.Fragment>
    )
  }
}






