import React from 'react';
import { AppBar, Box, Toolbar, Typography, Link, Switch } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import useStyles from './NavbarStyle.js';

const Navbar = ({handleBackgroundColorSwitch}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbar}>
                <Toolbar>
                    <img
                        src="moje_meme_logo.png"
                        alt="logo"
                        width="200px"
                    />

                    <div className={classes.grow} />

                    <Typography
                        className={classes.aboutLink}
                        variant="h6"
                    >
                        <Link color="secondary">
                            About
                        </Link>
                    </Typography>

                    <Typography
                        className={classes.githubLink}
                        variant="h6"
                    >
                        <Link color="secondary">
                            GitHub
                        </Link>
                    </Typography>

                    <Box className={classes.backgroundColorBox}>
                        <WbSunnyIcon className={classes.sunIcon} />
                            <Switch
                                className={classes.backgroundColorSwitch}
                                onChange={handleBackgroundColorSwitch}
                            />
                        <Brightness3Icon className={classes.moonIcon} />
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;