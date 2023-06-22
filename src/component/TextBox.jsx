import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
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
        onFocus={props.clear}
        variant="outlined"
        size="small"
      />
    </div>
  );
}

export default TextBox;