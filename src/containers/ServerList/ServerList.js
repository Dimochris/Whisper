import React, { Component } from "react";
import Server from "./Server/Server";

class ServerList extends Component {
  // serverRole => 1 πχ για Whisperer και 2 για target.
  state = {
    servers: [
      {
        serverCode: 1,
        serverName: "ΓΕΕΘΑ Server",
        serverPingStatus: true,
        serverCurlStatus: true,
        serverRole: 1
      },
      {
        serverCode: 2,
        serverName: "ΓΕΑ",
        serverPingStatus: true,
        serverCurlStatus: true,
        serverRole: 1
      },
      {
        serverCode: 3,
        serverName: "ΓΕΝ",
        serverPingStatus: true,
        serverCurlStatus: true,
        serverRole: 1
      },
      {
        serverCode: 4,
        serverName: "ΣΗΕ2",
        serverPingStatus: false,
        serverCurlStatus: false,
        serverRole: 2
      },
      {
        serverCode: 5,
        serverName: "ΣΗΕ2",
        serverPingStatus: false,
        serverCurlStatus: false,
        serverRole: 2
      },
      {
        serverCode: 6,
        serverName: "ΣΗΕ2",
        serverPingStatus: false,
        serverCurlStatus: false,
        serverRole: 2
      }
    ]
  };

  addServerHandler = () => {
    console.log("addServerHandler");
  };

  editServerHandler = serverId => {
    console.log(serverId);
  };

  deleteServerHandler = serverId => {
    console.log("deleteServerHandler " + serverId);
    const currentServerList = [...this.state.servers];
    currentServerList.splice(serverId, 1);
    this.setState({ servers: currentServerList });
  };

  render() {
    return (
      <div>
        <h1>Server List</h1>
        <button onClick={this.addServerHandler}>Add Server</button>
        {this.state.servers.map((server, serverkey) => (
          <Server
            key={serverkey}
            server={server}
            deleteServer={() => this.deleteServerHandler(serverkey)}
            editServer={() => this.editServerHandler(serverkey)}
          />
        ))}
      </div>
    );
  }
}
export default ServerList;
