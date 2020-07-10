import React from 'react';
import './App.css';
import Header from './component/Header';
import InputContainer from './component/InputContainer';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <InputContainer />
      </div>
    );
  }
}

export default App;