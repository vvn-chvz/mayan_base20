import * as React from 'react';
import { convert } from '../logic/convert';
import "./InputContainer.css";
import PlusMinus from './PlusMinus';
import TextBox from './TextBox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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
      <Container maxWidth="lg">
        <form onSubmit={this.convertHandler}>
          <Box color="text.primary">
            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item xs={2}>
                <TextBox storage={this.state.value} action={this.handleChange} />
              </Grid>
              <Grid item xs={2}>
                <Button type="submit" variant="contained" onClick={this.convertHandler}>Convert</Button>
              </Grid>
              <Grid item xs={12}>
                <PlusMinus add={this.IncrementItem} subtract={this.DecrementItem} />
              </Grid>
            </Grid>
          </Box>
          <Box color="text.primary">
            {this.state.result.map((number, i) =>
              <li className={i} key={i}><span>{number}</span> <img alt="" src={images[number + '.png']} /></li>
            )}
          </Box>
        </form>
      </Container>
    );
  }
}