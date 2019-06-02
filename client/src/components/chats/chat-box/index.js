import React, { useState } from 'react';
import '../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Chip, Col } from 'react-materialize'
import chats from '..';


class ChatBox extends React.Component {
    renderMessages() {
        let prevDate = '';
        if (this.props.messages)
            return this.props.messages.map(
                (message) => 
                    <React.Fragment>
                        {prevDate !== message.date && (prevDate = message.date) && <MessagesDate date={message.date} />}
                        <Message
                            key={message.id}
                            isMine={message.isMine}
                            messageContent={message.content}
                            messageTime={message.time}
                        />
                    </React.Fragment>      
            );
        else return null;
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <Col m={9} >
                <div className='messages-container'>
                    <div className='message-box'>
                        {this.renderMessages()}
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

const Message = (props) => {
    return (
        <div class={props.isMine ? "mine messages" : "yours messages"} key={props.key}>
            <div class="message last">
                <span style={{ marginRight: '40px' }}>{props.messageContent}</span>
                <span class={props.isMine ? "msg-time mine" : "msg-time yours"}>{props.messageTime}</span>
            </div>
        </div>
    );
}

const MessagesDate = (props) => {
    return (
        <div className='msg-date'>
            <Chip>{props.date}</Chip>
        </div>
    );
}

export default ChatBox;