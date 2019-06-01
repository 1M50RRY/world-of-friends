import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectChat } from '../../../../redux/actions'
import { Chip, CollectionItem, Icon } from 'react-materialize'

class ChatPreview extends React.Component {
    onSelect() {
        this.props.selectChat(this.props.id);
    }

    isChatSelected () {
        return this.props.id === this.props.selectedChatId;
    }

    render() {
        let messagePreviewColor = '';
        if (this.props.isMyMessageLast) messagePreviewColor = 'black';
        if(this.isChatSelected(this.props.id)) messagePreviewColor = 'white';
        else messagePreviewColor = 'teal';

        return (
            <CollectionItem 
            className="chat-preview-cursor avatar" 
            style={this.isChatSelected(this.props.id) ? { backgroundColor: 'teal' } : {}}
            onClick={() => this.onSelect()}
            >
                <img src={this.props.avatar} alt="" className="circle" />
                <span className="title main-text" style={this.isChatSelected() ? {color: 'white'} : {color: 'black'}}>
                    {this.props.name}
                </span>
                <p>
                    <br />
                    {this.props.isMyMessageLast && 
                    <span className="new-msg-text" style={this.isChatSelected(this.props.id) ? {color: 'white'} : {color: 'teal'}}>
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
                        style={this.isChatSelected(this.props.id) ? {marginRight: '-9px', color: 'white'} : {marginRight: '-9px'}}>
                        {this.props.lastMessageTime}
                    </span>
                </p>
                <p className="secondary-content" style={this.isChatSelected(this.props.id) ? { color: 'white' } : {color: 'teal'}}>
                    {
                        !this.props.isMyMessageLast && this.props.unreadMessages !== 0 && <UnreadMessage count={this.props.unreadMessages} />
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

function mapStateToProps(state) {
    return {
        selectedChatId: state.chats.selectedChatId
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectChat: selectChat }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatPreview);