import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TextBox = (props) => {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <TextField
        type="number"
        value={props.storage}
        onChange={props.action}
        variant="filled"
      />
    </div>
  );
}

export default TextBox;