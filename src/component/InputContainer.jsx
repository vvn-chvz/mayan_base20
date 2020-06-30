import * as React from 'react';
import { convert } from '../logic/convert';
import "./InputContainer.css";

var shortid = require('shortid');

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../media', false, /\.(png|jpe?g|svg)$/));

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
          <input type="number" step="1" value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.convertHandler}>Convert</button>
          <button onClick={this.IncrementItem}>+</button>
          <button onClick={this.DecrementItem}>-</button>

          {this.state.result.map((number, i) =>
            <li className={i} key={i}>{number} <img alt="" src={images[number + '.png']} /></li>
          )}
        </form>
      </div>
    );
  }
}