import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LightBulbOn from '@material-ui/icons/EmojiObjects';
import LightBulbOff from '@material-ui/icons/EmojiObjectsOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Store } from '../store';
import Footer from './footer';
import Map from './map';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: () => ({
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    }),
    appBarShift: props => ({
        width: `calc(100% - ${ props.drawerWidth }px)`,
        marginLeft: props.drawerWidth,
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    }),
    hide: {
        display: 'none'
    },
    drawer: (props) => ({
        width: props.drawerWidth,
        flexShrink: 0
    }),
    drawerPaper: (props) => ({
        width: props.drawerWidth
    }),
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: (props) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -props.drawerWidth
    }),
    contentShift: () => ({
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

export default function App() {
    const { state, dispatch } = React.useContext(Store);
    const classes = useStyles({ ...state });
    const theme = useTheme();

    const toggleDrawer = () => {
        dispatch({
            type: 'DRAWER_OPEN',
            payload: !state.drawerOpen
        });
    };

    const changeTheme = () => {
        dispatch({
            type: 'LIGHT_THEME',
            payload: !state.lightTheme
        });
    };

    return (
        <React.Fragment>
            <Hidden smDown>
                <Container component='main' disableGutters maxWidth={ false }>
                    <div className={ classes.root }>
                        <CssBaseline />
                        <AppBar
                            position='fixed'
                            className={ clsx(classes.appBar, {
                                [ classes.appBarShift ]: state.drawerOpen
                            })}
                        >
                            <Toolbar>
                                <Grid wrap='nowrap' direction='row' container justify='space-between' alignContent='center' alignItems='center'>
                                    <Grid item>
                                        <Grid wrap='nowrap' direction='row' container justify='space-between' alignContent='center' alignItems='center'>
                                            <Grid item>
                                                <IconButton
                                                    color='inherit'
                                                    aria-label='open drawer'
                                                    onClick={ toggleDrawer }
                                                    edge='start'
                                                    className={ state.drawerOpen ? classes.hide : null }
                                                >
                                                    <MenuIcon />
                                                </IconButton>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='h6' noWrap>
                                                    Nexview.io
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <IconButton
                                            color='inherit'
                                            onClick={ changeTheme }
                                            edge='start'
                                            className={ classes.themeButton }
                                        >
                                            { state.lightTheme ? <LightBulbOff /> : <LightBulbOn /> }
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={ classes.drawer }
                            variant='persistent'
                            anchor='left'
                            open={ state.drawerOpen }
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            <div className={ classes.drawerHeader }>
                                <IconButton onClick={ toggleDrawer }>
                                    { theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                                </IconButton>
                            </div>
                            <Divider />
                            <List>
                                <ListItem button>
                                    <ListItemIcon><ChevronLeftIcon /></ListItemIcon>
                                    <ListItemText primary='testing' />
                                </ListItem>
                            </List>
                        </Drawer>
                        <main
                            className={ clsx(classes.content, {
                                [ classes.contentShift ]: state.drawerOpen
                            })}
                        >
                            <div className={ classes.drawerHeader } />
                            <Map />
                        </main>
                    </div>
                    <Footer />
                </Container>
            </Hidden>
            <Hidden mdUp>
                <Container component='main'>
                    <Typography variant='h2' component='h1' gutterBottom>
                        App is currently only available for devices with a resolution of 960 pixels and higher.
                    </Typography>
                </Container>
            </Hidden>
        </React.Fragment>
    );
}