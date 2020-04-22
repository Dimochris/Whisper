import React, { Component } from "react";

import axios from '../../services/axios-orders';
import Auxiliary from '../../hoc/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from "./Message/Message";

class PendigData extends Component {
  state = {
    messages: null,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('peddingData.json')
      .then(response => {
        let currentPendingData = [];
        for (let element in response.data) {
          currentPendingData.push({
            peddingDataMessageId: element,
            peddingDataMessageCreatedDate: response.data[element].MessageCreatedDate,
            peddingDataMessageAuthor: response.data[element].MessageAuthor,
            peddingDataMessageText: response.data[element].MessageText,
            peddingDataMessageFrom: response.data[element].MessageFrom,
            peddingDataMessageTo: response.data[element].MessageTo
          });
        }
        this.setState({ messages: currentPendingData });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render() {
    let peddingDataPage = null;
    if (this.state.messages) {
      peddingDataPage = <Auxiliary>
        <h1>Pending Data List</h1>
        {this.state.messages.map((x, index) => <Message key={index} msg={x} />)}
      </Auxiliary>
    } else if (this.state.error) {
      peddingDataPage= <p>Pedding Data can't be loaded!</p>;
    } else {
      peddingDataPage=<Spinner/>
    }
    return (
      <div>
        {peddingDataPage}
      </div>
    );
  }
}
export default PendigData;
