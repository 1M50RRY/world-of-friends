import React from 'react';
import '../../../../../css/chats.css'

export const InterlocutorName = (props) => {
    return (
        <span className="title main-text" style={props.isChatSelected ? {color: 'white'} : {color: 'black'}}>
            {props.name.slice(0, 18).trim()}
            {props.name.length > 18 && '...'}
        </span>
    );
}