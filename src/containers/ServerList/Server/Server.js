import React from "react";

const Server = props => {
  return (
    <div>
      <p>Server Code: {props.server.serverCode}</p>
      <p>Server Name: {props.server.serverName}</p>
      <p>Server Ping Status: {props.server.serverPingStatus? <span>true</span>: <span>false</span>}</p>
      <p>Server Curl Status: {props.server.serverCurlStatus? <span>true</span>: <span>false</span>}</p>
      <p>Server Role: {props.server.serverRole}</p>
      <button onClick={props.deleteServer}>Delete</button>
      <button onClick={props.editServer}>Edit</button>
      <hr/>
    </div>
  );
};

export default Server;
