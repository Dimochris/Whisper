import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './navigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItem}>
            <NavigationItem>Error List</NavigationItem>
            <NavigationItem>Admin Page</NavigationItem>
            <NavigationItem>Server List</NavigationItem>
            <NavigationItem>Pending Data List</NavigationItem>
        </ul>
    );
};

export default navigationItems;