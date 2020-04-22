import React from 'react';

const Message = (props) => {
    return (
        <div>
            <p><strong>Message Id: {props.msg.peddingDataMessageId}</strong></p>
            <p>Message Created Date: {props.msg.peddingDataMessageCreatedDate}</p>
            <p>Message Author: {props.msg.peddingDataMessageAuthor}</p>
            <p>Message From: {props.msg.peddingDataMessageFrom}</p>
            <p>Message To: {props.msg.peddingDataMessageTo}</p>
            <p>Message Text: {props.msg.peddingDataMessageText}</p>
            <hr/>
        </div>
    );
};

export default Message;