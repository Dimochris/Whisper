import React, { Component, Fragment } from "react";
import Server from "./Server/Server";
import ServerAdd from "./ServerAdd/ServerAdd";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../../hoc/Auxiliary";
import axios from "../../services/axios-orders";

class ServerList extends Component {
  // serverRole => 1 πχ για target και 2 για Whisperer.
  state = {
    servers: [
      {
        serverCode: 1,
        serverName: "ΓΕΕΘΑ Server",
        serverBelogsTo: "ΓΕΕΘΑ",
        serverPingStatus: true,
        serverCurlStatus: true,
        serverRole: 1,
      },
      {
        serverCode: 2,
        serverName: "ΓΕΑ",
        serverBelogsTo: "pa",
        serverPingStatus: true,
        serverCurlStatus: true,
        serverRole: 1,
      },
      {
        serverCode: 3,
        serverName: "ΓΕΝ",
        serverBelogsTo: "pn",
        serverPingStatus: true,
        serverCurlStatus: true,
        serverRole: 1,
      },
      {
        serverCode: 4,
        serverName: "ΣΗΕ2",
        serverBelogsTo: "pa",
        serverPingStatus: false,
        serverCurlStatus: false,
        serverRole: 2,
      },
      {
        serverCode: 5,
        serverName: "ΣΗΕ2",
        serverBelogsTo: "pa",
        serverPingStatus: false,
        serverCurlStatus: false,
        serverRole: 2,
      },
      {
        serverCode: 6,
        serverName: "371",
        serverBelogsTo: "strxiras",
        serverPingStatus: false,
        serverCurlStatus: false,
        serverRole: 2,
      },
    ],
    addServer: false,
  };

  addServerHandlertoModal = () => {
    //console.log("addServerHandlertoModal");
    this.setState({ addServer: true });
  };
  cancelServerHandlertoModal = (e) => {
    // console.log("cancelServerHandlertoModal");
    console.log('aaa');
    e.preventDefault();
    this.setState({ addServer: false });
  };

  addServerHandler = (newServer) => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: "Chris dimo",
        address: {
          street: "Street1",
          zipCode: "12345",
          country: "Greece",
        },
        email: "chrisdimo1@sample.com",
        deliveryMethod: "fastest",
      },
    };
    const data = {
      serverCode: 9,
      serverName: newServer.serverName,
      serverPingStatus: false,
      serverCurlStatus: false,
      serverRole: newServer.serverRole,
    };
    axios
      .post("/serverswe.json", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    /*
  console.log("addServerHandler" + newServer);
  console.log(newServer);
  console.log('this.state.servers');
  console.log(this.state.servers);
  let currentServerList = [...this.state.servers];
  console.log('currentServerList');
  console.log(currentServerList);
  // πρόσθεσε και τον νέο
  currentServerList = [currentServerList, newServer];
  console.log('currentServerList');
  console.log(currentServerList);
  // this.setState({ servers: currentServerList });
  */
  };

  editServerHandler = (serverId) => {
    // console.log(serverId);
  };

  deleteServerHandler = (serverId) => {
    // console.log("deleteServerHandler " + serverId);
    const currentServerList = [...this.state.servers];
    currentServerList.splice(serverId, 1);
    this.setState({ servers: currentServerList });
  };

  render() {
    let serverAdd = (
      <ServerAdd
        //addServer={(serverItem) => this.addServerHandler(serverItem)}
        addServer={this.addServerHandler}
        cancelAddServer={this.cancelServerHandlertoModal}
      />
    );
    let serverList = (
      <Fragment>
        {this.state.servers.map((server, index) => (
          <Server
            key={index}
            server={server}
            deleteServer={() => this.deleteServerHandler(index)}
            editServer={() => this.editServerHandler(index)}
          />
        ))}
      </Fragment>
    );
    return (
      <Auxiliary>
        <h1>Server List</h1>
        <button onClick={this.addServerHandlertoModal}>Add Server</button>
        <Modal
          show={this.state.addServer}
          modalClosed={this.cancelServerHandlertoModal}
        >
          {serverAdd}
          <button onClick={this.cancelServerHandlertoModal} > Click me</button>
        </Modal>
        {serverList}
      </Auxiliary>
    );
  }
}
export default ServerList;
