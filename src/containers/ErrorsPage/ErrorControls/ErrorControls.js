import React from "react";
// Button for delete All
const ErrorControls = props => {
  let msg = null;
  let disabledButton = true;
  if(props.numOfErrors === 0){
    msg = <div>No Errors <button onClick={props.deleteAll} disabled={disabledButton}> Delete All </button></div>
  }else {
    disabledButton = false;
    msg = <div>Number of Errors:{props.numOfErrors} <button onClick={props.deleteAll} disabled={disabledButton}> Delete All </button></div>
  }
  return <div>{msg}</div>;
};

export default ErrorControls;
