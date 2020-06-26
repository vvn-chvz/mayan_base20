import * as React from 'react';
import { convert } from '../logic/convert';
import "./InputContainer.css";


var shortid = require('shortid');

export default class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, result: ['0'] };

    this.handleChange = this.handleChange.bind(this);
    this.convertHandler = this.convertHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  convertHandler(event) {
    this.setState({ result: convert(this.state.value) });
    event.preventDefault();
  }
  IncrementItem = () => {
    this.setState((prevState, props) => ({
      value: parseFloat(prevState.value) + 1
    }));
  };
  DecrementItem = () => {
    this.setState((prevState, props) => ({
      value: parseFloat(prevState.value) - 1
    }));
  };

  createNewId(text) {
    return {
      completed: false,
      id: shortid.generate(),
      text
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.convertHandler}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.convertHandler}>Convert</button>
          <button onClick={this.IncrementItem}>+</button>
          <button onClick={this.DecrementItem}>-</button>
          {this.state.result.map((number, i) =>
            <li className={i} key={i}>{number}</li>
          )}
        </form>
      </div>
    );
  }
}