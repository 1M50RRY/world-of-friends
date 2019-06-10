import React from 'react';
import '../../../../css/chats.css'
import { CollectionItem } from 'react-materialize'
import { MessagePreviewTextContent } from './components'

export default class ChatPreview extends React.Component {
    chooseTextColor () {
        let messagePreviewColor = '';
        if (this.props.isMyMessageLast) messagePreviewColor = this.props.generateColor('transparent', 'transparent', '#cfd8dc', 'black');
        if(this.props.isChatSelected) messagePreviewColor = this.props.generateColor('transparent', 'transparent', 'white', 'white');
        else if (!this.props.isMyMessageLast) messagePreviewColor = this.props.generateColor('transparent', 'transparent', '#cfd8dc', 'teal');
        return messagePreviewColor;
    }

    render() {
        return (
            <CollectionItem 
                className="chat-preview-cursor avatar" 
                style={
                    this.props.isChatSelected ? 
                        this.props.generateColor('#607d8b', 'teal', 'rgb(233, 235, 237)', 'white') 
                        : 
                        this.props.generateColor('transparent', 'transparent', 'white', 'black') 
                    }
                onClick={this.props.onSelect}
            >
                <img src={this.props.avatar} alt="" className="circle" />
                <MessagePreviewTextContent
                    isChatSelected={this.props.isChatSelected}
                    isMyMessageLast={this.props.isMyMessageLast} 
                    color={this.chooseTextColor()}
                    lastMessageText={this.props.lastMessageText}
                    unreadMessages={this.props.unreadMessages}
                    checked={this.props.checked}
                    lastMessageTime={this.props.lastMessageTime}
                    name={this.props.name}
                    generateColor={this.props.generateColor}
                />
            </CollectionItem>
        );
    }
}