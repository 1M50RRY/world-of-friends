import React from 'react';
import '../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './header'
import ChatList from './chat-list'
import { SendForm } from './send-form'
import ChatBox from './chat-box'
import { Row } from 'react-materialize'
import { updateChats, selectChat, searchChats, } from '../../redux/actions/chatsActions'
import { changeTheme, changeName, changeAvatar} from '../../redux/actions/userActions'
import axios from 'axios'
axios.defaults.withCredentials = true;

class ChatContainer extends React.Component {   
    onSelect = ( chatId ) => {  
        this.props.selectChat(chatId);
        /*
        if (this.props.chats[chatId]) {
            let chats = this.props.chats.slice();
            chats[chatId].unreadMessages = 0;
            this.props.updateChats(chats);
        }
        */
    }

    onBlock = () => {
        if (this.getSelectedChat().blockedById == null) {
            axios.post("http://localhost:3000/chats/block", {chatId: this.getSelectedChat().id}, { headers: { "Access-Control-Allow-Origin": "*", } })
            .then(res => { 
                //console.log(res.data.chats);
            });
        }
        else if(this.getSelectedChat().blockedById === this.props.user.id) {
            axios.post("http://localhost:3000/chats/unblock", {chatId: this.getSelectedChat().id}, { headers: { "Access-Control-Allow-Origin": "*", } })
            .then(res => { 
                //console.log(res.data.chats);
            });
        }
    }

    onChatsUpdate = () => {
        axios.get("http://localhost:3000/chats", { headers: { "Access-Control-Allow-Origin": "*", } })
        .then(res => { 
            //console.log(res.data.chats);
            this.props.updateChats(res.data.chats);
        });
    }

    componentWillMount() {
        this.refresh = setInterval(() => this.onChatsUpdate(), 500);
    }

    componentWillUnmount()
    {
        clearInterval(this.refresh);
    }

    getSelectedChat () {
        let def = {id:null,isBlocked:null,friend:{name:null,country:null,lastSeen:null}};
        if (this.props.selectedChatId !== undefined && this.props.chats) {
            let selectedChat = this.props.chats[this.props.selectedChatId];
            return selectedChat === undefined ? def : selectedChat;
        }
        else {
            return def;
        }   
    }

    generateColor = (darkBackground, lightBackground, darkText, lightText) => {
        return this.props.user.theme ? 
        {backgroundColor: darkBackground, color: darkText} 
        : 
        {backgroundColor: lightBackground, color: lightText}
    }

    onUserNameChange = ( value ) => {
        this.props.changeName(value);
    }

    onThemeChange = () => {
        this.props.changeTheme(!this.props.user.theme);
        let style = this.props.user.theme ? 'color:black' : 'color:white';
        document.getElementsByClassName('autocomplete')[0].setAttribute('style', style);
    }

    onSearch = ( event ) => {
        this.props.searchChats(event.target.value);
    }

    onMessageSend = ( text ) => {
        let chats = this.props.chats.slice();
        let date = new Date();
        chats[this.props.selectedChatId].messages.push(
            {
                //id: 1,
                isMine: true,
                date: date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDate(),
                time:  ("0" + date.getHours()).slice(-2)   + ":" + ("0" + date.getMinutes()).slice(-2),
                isRead: false,
                content: text
            }
        );
        this.props.updateChats(chats);
    }
    
    render() {
        return (
            <div className="container" style={this.generateColor('#37474f', 'white', 'white', 'white')}>
                <Header 
                    id={this.props.selectedChatId}
                    name={this.getSelectedChat().friend.name}
                    country={this.getSelectedChat().friend.country}
                    lastSeen={this.getSelectedChat().friend.last_login}
                    onBlock={this.onBlock}
                    isBlocked={this.getSelectedChat().blockedById !== undefined}
                    blockedById={this.getSelectedChat().blockedById}
                    friendId={this.getSelectedChat().friend.id}
                    onUserNameChange={this.onUserNameChange}
                    onThemeChange={this.onThemeChange}
                    user={this.props.user}
                    generateColor={this.generateColor}
                />
                <Row>
                    <ChatList 
                        selectedChatId={this.props.selectedChatId} 
                        onSelect={this.onSelect}
                        chats={this.props.chats}
                        query={this.props.query}
                        onSearch={this.onSearch}
                        generateColor={this.generateColor}
                    />
                    <ChatBox 
                        messages={this.getSelectedChat().messages} 
                        generateColor={this.generateColor} 
                    />
                </Row>
                { 
                    this.getSelectedChat().id !== null && !this.getSelectedChat().isBlocked ? 
                        <SendForm generateColor={this.generateColor} onMessageSend={this.onMessageSend}/> 
                        : 
                        null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedChatId: state.chats.selectedChatId,
        chats: state.chats.chats,
        query: state.chats.query,
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ 
        selectChat: selectChat,
        updateChats: updateChats,
        searchChats: searchChats,
        changeName: changeName,
        changeAvatar: changeAvatar,
        changeTheme: changeTheme
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatContainer);