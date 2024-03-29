import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
    },
    headerBar: {
        borderRadius: 4,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.headerBar}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Mayan Numeral Converter
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}