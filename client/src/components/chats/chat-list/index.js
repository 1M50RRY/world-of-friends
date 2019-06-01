import React from 'react';
import '../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchChats from './search-chats'
import ChatPreview from './chat-preview'
import { Collection, Col } from 'react-materialize'

class ChatList extends React.Component {
    render() {
        return (
            <Col m={3} style={{ height: '100%', borderRight: '2px solid #E9EBED' }}>
                <SearchChats />
                <div className="сhats-container">
                    <Collection>
                        <ChatPreview
                            id={1}
                            key={1} 
                            avatar="https://materializecss.com/images/yuna.jpg"
                            name="Anna"
                            lastMessageText="So what do you think about last premiere?"
                            isMyMessageLast={false}
                            lastMessageTime="14:43"
                            checked={false}
                            unreadMessages={4}
                        />
                        <ChatPreview 
                            id={2}
                            key={2} 
                            avatar="https://materializecss.com/images/yuna.jpg"
                            name="Julia"
                            lastMessageText="What's up?"
                            isMyMessageLast={true}
                            lastMessageTime="14:43"
                            checked={true}
                            unreadMessages={null}
                        />
                        <ChatPreview
                            id={3}
                            key={3}  
                            avatar="https://materializecss.com/images/yuna.jpg"
                            name="Elizabeth"
                            lastMessageText="What's up?"
                            isMyMessageLast={true}
                            lastMessageTime="14:43"
                            checked={false}
                            unreadMessages={null}
                        />
                    </Collection>
                </div>
            </Col>
        );
    }
}

export default ChatList;