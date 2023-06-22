import * as React from 'react';
import { convert } from '../logic/convert';
import "./InputContainer.css";
import PlusMinus from './PlusMinus';
import TextBox from './TextBox';
import Header from './Header';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

var shortid = require('shortid');


// todo Clean this up!
const glyphs = new Map();

glyphs.set(0, '𝋠');
glyphs.set(1, '𝋡');
glyphs.set(2, '𝋢');
glyphs.set(3, '𝋣');
glyphs.set(4, '𝋤');
glyphs.set(5, '𝋥');
glyphs.set(6, '𝋦');
glyphs.set(7, '𝋧');
glyphs.set(8, '𝋨');
glyphs.set(9, '𝋩');
glyphs.set(10, '𝋪');
glyphs.set(11, '𝋫');
glyphs.set(12, '𝋬');
glyphs.set(13, '𝋭');
glyphs.set(14, '𝋮');
glyphs.set(15, '𝋯');
glyphs.set(16, '𝋰');
glyphs.set(17, '𝋱');
glyphs.set(18, '𝋲');
glyphs.set(19, '𝋳');

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
        <form onSubmit={this.convertHandler}>
        <Paper elevation={3}>
        <Header></Header>
          <Box py={3} color="text.primary">
            <Grid container justifyContent="center" alignItems="center" spacing={1}>
              <Grid item xs={12} md={3}>
                <TextBox storage={this.state.value} action={this.handleChange} />
              </Grid>
              <Grid item xs={12} md={1}>
                <Button type="submit" size="large" variant="contained" onClick={this.convertHandler}>Convert</Button>
              </Grid>
              <Grid item xs={12}>
                <PlusMinus add={this.IncrementItem} subtract={this.DecrementItem} />
              </Grid>
            </Grid>
          </Box>
          <Box minHeight={200} pb={2} color="text.primary">
            {this.state.result.map((number, i) =>
              <li className={i} key={i}>{glyphs.get(number)}</li>
            )}
          </Box>
          </Paper>
        </form>
    );
  }
}