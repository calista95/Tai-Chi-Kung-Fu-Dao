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
import $ from 'jquery';





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
      </Router>

    </div>
    )
  }
}





/*
function App(){
  
  componentDidMount = () =>{
    $('button').on('click', function(){
      console.log("hello");
    })
  }
  
  return (
    <div className="App">
      <Router>
      <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home/>
          </React.Fragment>
        )} />

        <Route path="/about" component={About}/>
        <Route path="/instructors" component={Instructors}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/gallery" component={Gallery}/>
      </Router>
      <button>button</button>
    </div>
  );
}

export default App;
*/