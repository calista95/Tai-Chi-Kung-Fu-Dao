import React, { Component } from 'react'
import Footer from '../../../layout/Footer'
import '../../../style/pictureFormatter.css'

export default class pics_2014 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mediaCaption">Tiger Claw Elite Championship</div>
                    <div className="row">
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Albert-Pham-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Andrew-Zhou-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Cassidy-Wallace-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Christopher-lo-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Eric-Huang-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/IMG_0248-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Jiaquan-Li-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Joshua-Upham-and-Jesus-Canales-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Nicholas-Sun-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Sachit-Venkatraman-150x150.jpg')} alt='banner' /></div>
                        <div className="image"><img src={require('../../../style/img/Gallery/2014/Western-Han-150x150.jpg')} alt='banner' /></div>
                    </div>
                </div>
            <Footer></Footer>
            </React.Fragment>
        )
    }
}
