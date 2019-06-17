import React from 'react';
import { Chip, Col } from 'react-materialize'

export default class ChatBox extends React.Component {
    renderMessages() {
        let prevDate = '';
        if (this.messages)
            return this.messages.map(
                (message) => 
                    <React.Fragment>
                        {
                            prevDate !== message.date && (prevDate = message.date) && 
                            <MessagesDate date={message.date} generateColor={this.generateColor} />
                        }
                        <Message
                            key={message.id}
                            isMine={message.isMine}
                            messageContent={message.content}
                            messageTime={message.time}
                            generateColor={this.generateColor}
                        />
                    </React.Fragment>      
            );
        else return null;
    }

    scrollToBottom = () => this.messagesEnd.scrollIntoView({ behavior: "smooth" });

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render = () =>
        (
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

const Message = ({isMine, key, generateColor, messageContent, messageTime}) => {
    return (
        <div 
            class={isMine ? "mine messages" : "yours messages"} 
            key={key}
        >
            <div class="message" style={isMine ? 
                generateColor('#263238', 'teal', 'white', 'white')
                :
                generateColor('#546e7a', '#00acc1', 'white', 'white')
            }>
                <span style={{ marginRight: '40px' }}>{messageContent}</span>
                <span class={isMine ? "msg-time mine" : "msg-time yours"} style={isMine ? 
                    generateColor('#263238', '#b2dfdb', '#b0bec5', 'white')
                    :
                    generateColor('#546e7a', '#b2ebf2', '#cfd8dc', 'white')
                }>{messageTime}</span>
            </div>
        </div>
    );
}

const MessagesDate = ({generateColor, date}) => {
    return (
        <div className='msg-date'>
            <Chip style={generateColor('#607d8b', '#e4e4e4', 'white', 'black')}>{date}</Chip>
        </div>
    );
}