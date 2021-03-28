import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Store } from '../../store';

function Copyright() {
    return (
        <Typography variant='body2'>
            { '©' } { new Date().getFullYear() } { 'Nexview Software LLC.' }
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    light: {
        color: theme.palette.getContrastText(theme.palette.grey[200]),
        backgroundColor: theme.palette.grey[200]
    },
    dark: {
        color: theme.palette.getContrastText(theme.palette.grey[800]),
        backgroundColor: theme.palette.grey[800]
    },
    footer: (props) => ({
        position: 'absolute',
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        zIndex: 1,
        height: props.footerHeight,
        bottom: 0
    }),
    footerShiftRight: (props) => ({
        width: `calc(100% - ${ props.drawerWidth }px)`,
        marginLeft: props.drawerWidth,
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    }),
    footerShiftLeft: () => ({
        width: '100%',
        marginLeft: 0,
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

export default function StickyFooter() {
    const { state } = React.useContext(Store);
    const classes = useStyles({ ...state });

    return (
        <footer className={ clsx(classes.footer, {
            [ classes.footerShiftRight ]: state.drawerOpen,
            [ classes.footerShiftLeft ]: !state.drawerOpen,
            [ classes.light ]: state.lightTheme,
            [ classes.dark ]: !state.lightTheme
        })}>
            <Container maxWidth={ false }>
                <Typography variant='body1'>Sticky footer found here.</Typography>
                <Copyright />
            </Container>
        </footer>
    );
}