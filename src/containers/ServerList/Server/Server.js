import React from "react";

const Server = props => {
  // A Auto increment server code
  // A text for name
  // If we take an answer from ping 
  // If we take an answer from curl
  // Role 1 for End Points Servers and Role 2 for Whisperers
  
  return (
    <div>
      <p>Server Code: {props.server.serverCode}</p> 
      <p>Server Name: {props.server.serverName}</p> 
      <p>Server Belogs to: {props.server.serverBelogsTo}</p> 
      <p>Server Ping Status: {props.server.serverPingStatus? <span>true</span>: <span>false</span>}</p> 
      <p>Server Curl Status: {props.server.serverCurlStatus? <span>true</span>: <span>false</span>}</p> 
      <p>Server Role: {props.server.serverRole===1 ? 'Target Server' : 'Whisperer'}</p> 
      <button onClick={props.deleteServer}>Delete</button>
      <button onClick={props.editServer}>Edit</button>
      <hr/>
    </div>
  );
};

export default Server;
