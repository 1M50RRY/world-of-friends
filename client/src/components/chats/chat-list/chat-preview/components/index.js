import React from 'react';
import {InterlocutorName} from './interlocutorName'
import {LastMessagePreview} from './lastMessagePreview'
import {LastMessageTime} from './lastMessageTime'
import {SecondaryContent} from './secondaryContent'

export const MessagePreviewTextContent = (
    {isChatSelected, name, generateColor, isMyMessageLast, color, lastMessageText, lastMessageTime, unreadMessages, checked}
    ) => 
    (
        <React.Fragment>
            <InterlocutorName isChatSelected={isChatSelected} name={name}  generateColor={generateColor}/>
            <LastMessagePreview 
                isMyMessageLast={isMyMessageLast} 
                isChatSelected={isChatSelected}
                color={color}
                lastMessageText={lastMessageText}
                generateColor={generateColor}
            />
            <LastMessageTime isChatSelected={isChatSelected} lastMessageTime={lastMessageTime} generateColor={generateColor}/>
            <SecondaryContent 
                isChatSelected={isChatSelected}
                isMyMessageLast={isMyMessageLast}
                unreadMessages={unreadMessages}
                checked={checked}
                generateColor={generateColor}
            />
        </React.Fragment>
        
    );