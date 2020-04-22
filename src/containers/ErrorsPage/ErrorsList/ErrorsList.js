import React from "react";
import Error from "./Error/Error";
import classes from "./ErrorsList.css";

const errorslist = props => {
  return (
    <div>
      <h1 className={classes.h1}>Error List</h1>
      {props.errors.map((er, index) => (
        <Error 
          key={index} 
          err={er} 
          deleteError={() => props.deleteError(index)}
        />
      )     
      )}
    </div>
  );
};
export default errorslist;
