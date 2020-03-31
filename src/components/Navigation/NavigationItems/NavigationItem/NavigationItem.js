import React from "react";
import classes from "./NavigationItem.css";

const navigationItem = props => {
  return (
    <li className={classes.navigationItem}>
      <a href={props.href} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
