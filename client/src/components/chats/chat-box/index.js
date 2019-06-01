import React from 'react';
import '../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Chip, Col } from 'react-materialize'


class ChatBox extends React.Component {

    renderMessages() {
        return this.props.messages.map(
            message =>
                <Message
                    key={message.id}
                    isMine={message.isMine}
                    messageContent={message.content}
                    messageTime={message.time}
                />
        );
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
                        <div className='msg-date'>
                            <Chip>May 24</Chip>
                        </div>
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

export default ChatBox;