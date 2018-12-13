import React, { Component } from 'react';

import NavbarComponent from './Components/NavbarComponent';
import EnvironmentComponent  from './Components/EnvironmentComponent';
import ChartComponent from './Components/ChartComponent';
import RoomAppliancesComponent from './Components/RoomAppliancesComponent';
//import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
      
          <NavbarComponent />
          <EnvironmentComponent/>
          <ChartComponent/>
          <RoomAppliancesComponent/>
      </div>
    );
  }
}

export default App;
