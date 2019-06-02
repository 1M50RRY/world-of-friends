import React from 'react';
import '../../../../css/chats.css'
import { Chip, CollectionItem, Icon } from 'react-materialize'

export default class ChatPreview extends React.Component {
    render() {
        let messagePreviewColor = '';
        if (this.props.isMyMessageLast) messagePreviewColor = 'black';
        if(this.props.isChatSelected) messagePreviewColor = 'white';
        else if (!this.props.isMyMessageLast) messagePreviewColor = 'teal';

        return (
            <CollectionItem 
                className="chat-preview-cursor avatar" 
                style={this.props.isChatSelected ? { backgroundColor: 'teal' } : {}}
                onClick={() => this.props.onSelect()}
            >
                <img src={this.props.avatar} alt="" className="circle" />
                <span className="title main-text" style={this.props.isChatSelected ? {color: 'white'} : {color: 'black'}}>
                    {this.props.name}
                </span>
                <p>
                    <br />
                    {this.props.isMyMessageLast && 
                    <span className="new-msg-text" style={this.props.isChatSelected ? {color: 'white'} : {color: 'teal'}}>
                        You: 
                    </span>}
                    <span 
                        className={this.props.isMyMessageLast ? "def-msg-text" : "new-msg-text"} 
                        style={{color: messagePreviewColor}}
                    >
                        {' ' + this.props.lastMessageText.slice(0, 22).trim()}
                        {this.props.lastMessageText.length > 22 && '...'}
                    </span>
                </p>
                <p className="secondary-content" style={{ marginTop: '-0.7em' }}>
                    <span 
                        className="gray-text" 
                        style={this.props.isChatSelected ? {marginRight: '-9px', color: 'white'} : {marginRight: '-9px'}}>
                        {this.props.lastMessageTime}
                    </span>
                </p>
                <p className="secondary-content" style={this.props.isChatSelected ? { color: 'white' } : {color: 'teal'}}>
                    {
                        !this.props.isMyMessageLast && 
                        !this.props.isChatSelected &&
                        this.props.unreadMessages !== 0 && 
                        <UnreadMessage count={this.props.unreadMessages} />
                    }
                    {
                        this.props.isMyMessageLast && <CheckMessage isChecked={this.props.checked} />
                    }
                </p>
            </CollectionItem>
        );
    }
}

const UnreadMessage = (props) => {
    return (
        <Chip className="teal msg-props">
            <span className="msg-count">{ props.count.toString() }</span>
        </Chip>
    );
}

const CheckMessage = (props) => {
    return (
        <Icon className="msg-props">
            {props.isChecked ? 'done_all' : 'done'}
        </Icon>
    );
}