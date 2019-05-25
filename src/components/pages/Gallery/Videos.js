import React, { Component } from 'react'
import '../../style/Videos.css'
import Footer from '../../layout/Footer' 

export default class Videos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="videosTitle">Video Gallery</div>
        <div className="container">
            <div className="row">
                <p className="mediaCaption">Master's Performance</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/1z7bW2aPTu8" 
                    frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
                </div>
            </div>

            <div className="row">
                <p className="mediaCaption">Presentation</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/T0lTKQsNFBM" 
                    frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
                </div>
            </div>

            <div className="row">
                <p className="mediaCaption">Belt Testing</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/rdMUvBQUPCs" 
                    frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
                </div>
            </div>

            <div className="row">
                <p className="mediaCaption">Lumination</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/hnMKfmlBxbY" 
                    frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
                </div>
            </div>
            
        </div>
        <Footer></Footer>  
      </React.Fragment>
    )
  }
}
