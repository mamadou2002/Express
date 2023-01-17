import './App.css';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import {Route, link } from 'react-router-dom';
import Navbar from './Navbar';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/About' component={About}/> 
      <Route exact path='/Service' component={Service}/>     
    </div>
  );
}

export default App;
