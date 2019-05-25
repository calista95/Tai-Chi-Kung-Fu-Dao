import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Instructors from './components/pages/Instructors';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
//gallery
import Videos from './components/pages/Gallery/Videos';
import Pictures from './components/pages/Gallery/Pictures';
import pics_2012 from './components/pages/Gallery/Pictures/pics_2012';
//pics_2013
  import annual_performance_2013 from './components/pages/Gallery/Pictures/pics_2013/annual_performance_2013'
  import wushu_invitational_competition_2013 from './components/pages/Gallery/Pictures/pics_2013/wushu_invitational_competition_2013'
import pics_2014 from './components/pages/Gallery/Pictures/pics_2014';
import pics_2015 from './components/pages/Gallery/Pictures/pics_2015';
import pics_2016 from './components/pages/Gallery/Pictures/pics_2016';
//classes
import MartialArtsProgram from './components/pages/Classes/MartialArtsProgram';
import LittleDragons from './components/pages/Classes/LittleDragons';
import JuniorDragons from './components/pages/Classes/JuniorDragons';
import DragonTeam from './components/pages/Classes/DragonTeam';
import AdvancedBlackBeltProgram from './components/pages/Classes/Advanced';
import SummerCamp from './components/pages/Classes/SummerCamp';
//schedules
import MainSchedule from './components/pages/Schedule/MainSchedule';
import Holiday from './components/pages/Schedule/Holiday';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Router>
      <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home/>
          </React.Fragment>
        )} />

        <Route path="/About" component={About}/>
        <Route path="/Instructors" component={Instructors}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Videos" component={Videos}/>
        <Route path="/Pictures" component={Pictures}/>
        <Route path="/MartialArtsProgram" component={MartialArtsProgram}/>
        <Route path="/LittleDragons" component={LittleDragons}/>
        <Route path="/JuniorDragons" component={JuniorDragons}/>
        <Route path="/DragonTeam" component={DragonTeam}/>
        <Route path="/AdvancedBlackBeltProgram" component={AdvancedBlackBeltProgram}/>
        <Route path="/SummerCamp" component={SummerCamp}/>
        <Route path="/MainSchedule" component={MainSchedule}/>
        <Route path="/Holiday" component={Holiday}/>
        <Route path="/pics_2012" component={pics_2012}/>
        <Route path="/annual_performance_2013" component={annual_performance_2013}/>
        <Route path="/wushu_invitational_competition_2013" component={wushu_invitational_competition_2013}/>
        <Route path="/pics_2014" component={pics_2014}/>
        <Route path="/pics_2015" component={pics_2015}/>
        <Route path="/pics_2016" component={pics_2016}/>
      </Router>
 
    </div>
    )
  }
}





