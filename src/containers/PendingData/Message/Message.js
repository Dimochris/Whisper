import React from 'react';

const Message = (props) => {
    return (
        <div>
            <p><strong>Message Id: {props.msg.messageId}</strong></p>
            <p>Message Created Date: {props.msg.MessageCreatedDate}</p>
            <p>Message Author: {props.msg.MessageAuthor}</p>
            <p>Message From: {props.msg.MessageFrom}</p>
            <p>Message To: {props.msg.MessageTo}</p>
            <p>Message Text: {props.msg.MessageText}</p>
            <hr/>
        </div>
    );
};

export default Message;