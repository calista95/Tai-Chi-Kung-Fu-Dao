import React from 'react'
import '../style/Contact.css';
import Footer from '../layout/Footer';

export default function Contact() {
  return (
    <React.Fragment>
         <div className="contact">Contact Us</div>
        <div className="container">
            <div className="row">
                <div className="col-md-auto col2">
                    <i className="far fa-envelope"></i> &nbsp;&nbsp; Email: kungfuz@kungfuz.com <br></br>
                    <i className="fas fa-phone"></i> &nbsp;&nbsp; Phone: (408) 505-8809 <br></br>
                    <i className="fas fa-map-pin"></i> &nbsp;&nbsp; 2270 Quimby Road, San Jose, CA 95122
                </div>
            </div>    

            <div className="row">Questions or concerns? Send us an email directly: </div>
            <div className="row">
                <form action="mailto:kungfuz@kungfuz.com" method="post" enctype="text/plain" >
                    <textarea className="emailBody" maxlength="50" type="text" name="message" /><br></br>
                    <center><button className="waves-effect waves-light btn-med blue lighten-3 btn"><input type="submit" value="Submit"/></button></center>
                </form>
            </div>
        </div>
        <Footer></Footer>
    </React.Fragment>
  )
}

