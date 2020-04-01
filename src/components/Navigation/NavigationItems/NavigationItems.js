import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./navigationItems.css";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Error List</NavigationItem>
    <NavigationItem link="/" >Admin Page</NavigationItem>
    <NavigationItem link="/" >Server List</NavigationItem>
    <NavigationItem link="/" >Pending Data List</NavigationItem>
  </ul>
);

export default navigationItems;
