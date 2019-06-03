import React from 'react';
import '../../../../css/chats.css'
import { CollectionItem } from 'react-materialize'
import { MessagePreviewTextContent } from './components'

export default class ChatPreview extends React.Component {
    chooseTextColor () {
        let messagePreviewColor = '';
        if (this.props.isMyMessageLast) messagePreviewColor = 'black';
        if(this.props.isChatSelected) messagePreviewColor = 'white';
        else if (!this.props.isMyMessageLast) messagePreviewColor = 'teal';
        return messagePreviewColor;
    }

    render() {
        return (
            <CollectionItem 
                className="chat-preview-cursor avatar" 
                style={this.props.isChatSelected ? { backgroundColor: 'teal' } : {}}
                onClick={() => this.props.onSelect()}
            >
                <img src={this.props.avatar} alt="" className="circle" />
                <MessagePreviewTextContent
                    isChatSelected={this.props.isChatSelected}
                    isMyMessageLast={this.props.isMyMessageLast} 
                    color={this.chooseTextColor()}
                    lastMessageText={this.props.lastMessageText}
                    unreadMessages={this.props.unreadMessages}
                    checked={this.props.checked}
                    lastMessageTime={this.props.LastMessageTime}
                    name={this.props.name}
                />
            </CollectionItem>
        );
    }
}