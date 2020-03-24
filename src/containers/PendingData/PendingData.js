import React, { Component } from "react";
import Message from "./Message/Message";

class PendigData extends Component {
  state = {
    messages: [
      {
        messageId: 1,
        MessageCreatedDate: "1/1/2020 9:15 UTC",
        MessageAuthor: "Chris Dimo",
        MessageText: "Bla bla bla",
        MessageFrom: 'ΓΕΑ',
        MessageTo: 'ΓΕΕΘΑ'
      },
      {
        messageId: 2,
        MessageCreatedDate: "1/1/2020 9:15 UTC",
        MessageAuthor: "Chris Dimo",
        MessageText: "Bla bla bla",
        MessageFrom: 'ΓΕΑ',
        MessageTo: 'ΓΕΕΘΑ'
      },
      {
        messageId: 3,
        MessageCreatedDate: "1/1/2020 9:15 UTC",
        MessageAuthor: "Chris Dimo",
        MessageText: "Bla bla bla",
        MessageFrom: 'ΓΕΑ',
        MessageTo: 'ΓΕΕΘΑ'
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Pending Data List</h1>
        {this.state.messages.map((x, index)=><Message key={index} msg={x}/>)}
      </div>
    );
  }
}
export default PendigData;
