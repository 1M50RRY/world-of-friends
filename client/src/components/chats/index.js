import React from 'react';
import '../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './header'
import ChatList from './chat-list'
import { SendForm } from './send-form'
import ChatBox from './chat-box'
import { Row } from 'react-materialize'
import { updateChats, selectChat } from '../../redux/actions'

class ChatContainer extends React.Component {  

    onSelect = ( chatId ) => {
        this.props.selectChat(chatId);
        if (this.props.chats[chatId]) {
            let chats = this.props.chats.slice();
            chats[chatId].unreadMessages = 0;
            this.props.updateChats(chats);
        }
    }

    onBlock = ( chatId, isBlocked ) => {
        if (this.props.chats[chatId]) {
            let chats = this.props.chats.slice();
            chats[chatId].isBlocked = isBlocked;
            this.props.updateChats(chats);
        }
    }

    getSelectedChat () {
        let def = {id:null,name:null,country:null,lastSeen:null,isBlocked:null};
        if (this.props.selectedChatId !== undefined && this.props.chats) {
            let selectedChat = this.props.chats[this.props.selectedChatId];
            return selectedChat === undefined ? def : selectedChat;
        }
        else {
            return def;
        }   
    }
    
    render() {
        return (
            <div className="container" style={{backgroundColor: 'white'}}>
                <Header 
                    id={this.getSelectedChat().id}
                    name={this.getSelectedChat().name}
                    country={this.getSelectedChat().country}
                    lastSeen={this.getSelectedChat().lastSeen}
                    onBlock={this.onBlock}
                    isBlocked={this.getSelectedChat().isBlocked}
                />
                <Row>
                    <ChatList 
                        selectedChatId={this.props.selectedChatId} 
                        onSelect={this.onSelect}
                        chats={this.props.chats}
                    />
                    <ChatBox messages={this.getSelectedChat().lastMessages}/>
                </Row>
                <SendForm />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedChatId: state.chats.selectedChatId,
        chats: state.chats.chats
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ 
        selectChat: selectChat,
        updateChats: updateChats 
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatContainer);