import React from "react";
import classes from "./Error.css";

const error = props => {
  let errorClasses = null;
  switch (props.err.type) {
    case "1":
      errorClasses=classes.Error1;
      break;
    case "2":
      errorClasses=classes.Error2;
      break;
    case "3":
      errorClasses=classes.Error3;
      break;
    case "4":
      errorClasses=classes.Error4;
      break;
    default:
      errorClasses=classes.Default;
      break;
  }

  return (
    <div className={errorClasses}>
      Error Code: {props.err.code}
      Error Name: {props.err.name}
      Error Description: {props.err.description}
      Error Type: {props.err.type}
      Error DateTime: {props.err.dateTime}
      <button onClick={props.editError}>Edit</button>
      <button onClick={props.deleteError}>Delete</button>
    </div>
  );
};

export default error;
