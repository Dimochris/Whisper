import React from "react";
import classes from "./Error.css";

const error = props => {
  let errorClasses = null;
  switch (props.err.errorType) {
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
      Error ID: {props.err.errorId}
      Error Code: {props.err.errorCode}
      Error Name: {props.err.errorName}
      Error Description: {props.err.errorDescription}
      Error Type: {props.err.errorType}
      Error DateTime: {props.err.errorDateTime}
      <button onClick={props.deleteError}>Delete</button>
    </div>
  );
};

export default error;
