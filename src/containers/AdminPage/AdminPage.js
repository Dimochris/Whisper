import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
class AdminPage extends Component {
  state = {
    serverId: 1,
    serverName: "ΓΕΑ Server",
    serverIP: "192.168.1.1",
    ramUsage: (Math.random()*100).toFixed(1),
    cpuUsage: (Math.random()*100).toFixed(1),
    storageUsage: "40",
    communicate: true,
    communicationType: true,
    connectingWhispererId: 1
  };
  render() {
    return (
      <Auxiliary>
        <h1>Admin Page</h1>
        <p>Server Name: {this.state.serverName}</p>
        <p>Ram Usage: {this.state.ramUsage} %</p>
        <p>CPU Usage: {this.state.cpuUsage} %</p>
        <p>Local Storage Usage: {this.state.storageUsage} %</p>
        <p>{this.state.communicate ? <span>Sending Data</span>:<span>Stop Transmition</span>}</p>
        <p>Comunication Type: {this.state.communicationType ? <span>Throw Whisperer</span> : <span>Direct Messages</span>}</p>
        {this.state.communicationType? <p>Connected Whisperer ID: {this.state.connectingWhispererId}</p>: null}
      </Auxiliary>
    );
  }
}
export default AdminPage;
