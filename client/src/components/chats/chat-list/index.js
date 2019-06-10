import React from 'react';
import '../../../css/chats.css'
import SearchChats from './search-chats'
import ChatPreview from './chat-preview'
import { Collection, Col } from 'react-materialize'

class ChatList extends React.Component {
    isChatSelected ( chatId ) {
        return chatId === this.props.selectedChatId;
    }

    renderChats () {
        if(this.props.chats)
        {
            return this.props.chats.map((chat, index) =>
                chat.friend.name.includes(this.props.query) ? 
                <ChatPreview
                    isChatSelected={this.isChatSelected(index)}
                    onSelect={() => this.props.onSelect(index)}
                    key={chat.id} 
                    avatar={chat.friend.avatar}
                    name={chat.friend.name}
                    lastMessageText={chat.messages[chat.messages.length - 1].content}
                    isMyMessageLast={chat.messages[chat.messages.length - 1].isMine}
                    lastMessageTime={chat.messages[chat.messages.length - 1].time}
                    checked={chat.messages[chat.messages.length - 1].isRead}
                    unreadMessages={chat.messages.map(message => {
                        return !message.isMine && message.isRead ? message : null
                    }).length}
                    generateColor={this.props.generateColor}
                />
                :
                null
            );
        }
    }

    render() {
        return (
            <Col m={3} style={{ height: '100%', borderRight: '2px solid #E9EBED' }}>
                <SearchChats onSearch={this.props.onSearch} generateColor={this.props.generateColor} />
                <div className="сhats-container">
                    <Collection>
                        {this.renderChats()}
                    </Collection>
                </div>
            </Col>
        );
    }
}

export default ChatList;