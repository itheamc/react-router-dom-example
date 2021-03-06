import React, { useState, useEffect } from 'react'
import { NavLink, useLocation  } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { StyledTabs, StyledTab } from "./Components";
import { useStyles } from './Themes';

const paths = ['/', '/blog', '/profile', '/about', '/search'];
const NavBar = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const location = useLocation();


    useEffect(() => {
        setValue(getIndex(location.pathname));     
    }, [location]);

    // Function to find index of the current path on the paths array
    const getIndex = (p) => paths.indexOf(p);


    return (
        <div className = {classes.root}>
            <div className = {`${classes.titleContainer} ${classes.transitionClass}`}>
                <Typography variant = "h2">{document.title}</Typography>
            </div>
            <div className={classes.tabContainer}>
                <StyledTabs centered value={value} aria-label="nav-bar">
                    <StyledTab label="Home" component = {NavLink} to = '/' />
                    <StyledTab label="Blog" component = {NavLink} to = '/blog' />
                    <StyledTab label="Profile" component = {NavLink} to = '/profile' />
                    <StyledTab label="About" component = {NavLink} to = '/about' />
                    <StyledTab label="Search" component = {NavLink} to = '/search' />

                </StyledTabs>
            </div>
        </div>
    )
}

export default NavBar
