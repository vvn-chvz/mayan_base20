import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const PlusMinus = (props) => {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <IconButton color="secondary" aria-label="add" onClick={props.add}>
                <AddCircleIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="subtract" onClick={props.subtract}>
                <RemoveCircleIcon />
            </IconButton>
        </div>
    );
}

export default PlusMinus;
