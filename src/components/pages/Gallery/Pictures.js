import React, { Component } from 'react'
import '../../style/Pictures.css'
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer'

export default class Pictures extends Component {
  render() {  
    return (
        <React.Fragment>
            <div className="picturesTitle">Picture Gallery</div>
            <div className="container pictureGallery">

              <div className="row justify-content-center">

                <div className="col-md-6 custom-info text-center yr_2013">2013
                  <ul>
                    <li><Link className="nav-item"  to="/annual_performance_2013">Annual Performance 2013</Link></li>
                    <li><Link className="nav-item"  to="/wushu_invitational_competition_2013">Wushu Invitational Competition 2013</Link></li>
                  </ul>
                </div>

                <div className="col-md-6 custom-info text-center yr_2014">2014
                  <ul>
                    <li><Link className="nav-item"  to="/pics_2014">Tiger Claw Elite Competition</Link></li>
                  </ul>
                </div>

              </div>

              <div className="row justify-content-center">

                <div className="col-md-6 custom-info text-center yr_2015">2015
                  <ul>
                    <li><Link className="nav-item"  to="/pics_2015">2015 Spring Performance Video</Link></li>
                  </ul>
                </div>

                <div className="col-md-6 custom-info text-center yr_2016">2016
                  <ul>
                    <li><Link className="nav-item"  to="/pics_2016">2016 Spring Performance/NCCAF Wushu and Dance Invitational</Link></li>
                  </ul>
                </div>

              </div>
  
            </div>
        <Footer></Footer>
        </React.Fragment>
    )
  }
}
   