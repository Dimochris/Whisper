import React, { Component, Fragment } from "react";

import axios from "../../services/axios-orders";

import Server from "./Server/Server";
import ServerAdd from "./ServerAdd/ServerAdd";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../../hoc/Auxiliary";
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler';
import { serverBelogsTo, serverRole } from '../../services/enumerations';

class ServerList extends Component {
  // serverRole => 1 πχ για target και 2 για Whisperer.
  state = {
    servers: null,
    addServer: false,
    loading: false,
    error: false
  };
  

  componentDidMount() {
    axios.get('servers.json')
      .then(response => {
        // console.log(response.data);
        let currentTable = [];
        for (let element in response.data) {
          currentTable.push({
            serverID: element,
            serverCode: response.data[element].serverCode,
            serverName: response.data[element].serverName,
            serverBelogsTo: response.data[element].serverBelogsTo,
            serverPingStatus: response.data[element].serverPingStatus,
            serverCurlStatus: response.data[element].serverCurlStatus,
            serverRole: response.data[element].serverRole
          });
        };
        // console.log(currentTable);
        this.setState({ servers: currentTable });

      }).catch(error => {
        this.setState({ error: true });
      });
  }

  addServerHandlertoModal = () => {
    this.setState({ addServer: true });
  };

  cancelServerHandlerfromModal = (e) => {
    e.preventDefault(); //  για να μην κάνει rerender το component
    this.setState({ addServer: false });
  };

  addServerHandler = (newServer) => {
    this.setState({ loading: true }); // για το spenner
    newServer.preventDefault();
    const newServerData = {
      serverCode: 9,
      serverName: serverBelogsTo[3],
      serverBelogsTo: "strxiras",
      serverPingStatus: false,
      serverCurlStatus: false,
      serverRole: serverRole[1]
    };

    axios
      .post("/servers.json", newServerData)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          let currentServerList = [...this.state.servers];
          currentServerList.push(newServerData);
          // πρόσθεσε και τον νέο
          this.setState({ servers: currentServerList });
          this.setState({ loading: false });
          this.setState({ addServer: false });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });

  };

  editServerHandler = (serverId) => {
    // console.log(serverId);
  };


  deleteServerHandler = (serverId) => {
    const currentServerList = [...this.state.servers];
    currentServerList.splice(serverId, 1);
    this.setState({ servers: currentServerList });
    // Delete from server and if receive 200 ok 
  };

  render() {
    let serverAdd = <ServerAdd
      addServer={this.addServerHandler}
      cancelAddServer={this.cancelServerHandlerfromModal}
    />
    if (this.state.loading) {
      serverAdd = <Spinner />;
    }
    let serverList = null;
    if (this.state.servers) {
      serverList = (<Fragment>
        {this.state.servers.map((server, index) => (
          <Server
            key={index}
            server={server}
            deleteServer={() => this.deleteServerHandler(index)}
            editServer={() => this.editServerHandler(index)}
          />
        ))}
      </Fragment>);
    } else if (this.state.error) {
      serverList = <p>Servers can't be loaded!</p>;
    } else {
      serverList = <Spinner />;
    };

    return (
      <Auxiliary>
        <h1>Server List</h1>
        <button onClick={this.addServerHandlertoModal}>Add Server</button>
        <Modal show={this.state.addServer} modalClosed={this.cancelServerHandlerfromModal}>
          {serverAdd}
        </Modal>
        {serverList}
      </Auxiliary>
    );
  }
}
export default withErrorHandler(ServerList, axios);
