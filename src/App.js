import React from 'react';
import './App.css';
import Wrap from './component/Wrap';

// Mayan Numeral Unicode
import "./fonts/NotoSansMayanNumerals-Regular.ttf"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Wrap></Wrap>
      </div>
    );
  }
}

export default App;