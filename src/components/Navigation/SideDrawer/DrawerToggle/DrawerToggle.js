import React from "react";
import classes from "./DrawerToggle.css";
import Backdrop from "../../../UI//Backdrop/Backdrop";
import Auxiliary from "../../../../hoc/Auxiliary";

const drawerToggle = props => {
  return (
    <Auxiliary>
      <Backdrop />
      <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Auxiliary>
  );
};

export default drawerToggle;
