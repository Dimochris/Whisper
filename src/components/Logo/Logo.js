import React from "react";
import AppLogo from "../../assets/ThalesLogo.png";
import classes from './Logo.css';

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={AppLogo} alt="Whisperer Logo" />
    </div>
  );
};

export default logo;
