import React, { Component } from 'react'
import '../../../layout/Footer'
import Footer from '../../../layout/Footer';

export default class pics_2015 extends Component {
    render() {
        return (
           <React.Fragment>
               <div className="container">
                    <div className="row">
                        <p className="mediaCaption">2015 Spring Performance Video</p>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/QJqqKZB1nJo" 
                        frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
                        </div>
                    </div>      
               </div>
            <br></br><br></br>
            <Footer></Footer>
           </React.Fragment>
        )
    }
}
