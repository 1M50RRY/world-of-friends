import React from 'react';
import '../../../css/chats.css'
import { Textarea, Icon, Col, Button, Row } from 'react-materialize'

export const SendForm = (props) => {
    return (
        <Row>
            <Col 
                m={9} 
                offset="m3" 
                style={{ 
                    borderLeft: '1px solid #E9EBED', 
                    borderTop: '1px solid #E9EBED', 
                    marginLeft: '319px', 
                    marginTop: '-109px', 
                    height: '50px' }}
            >
                <MessageText 
                    areaColor={props.generateColor('transparent ', 'transparent', 'white', 'black')} 
                    buttonColor={props.generateColor('transparent', 'transparent', 'white', 'teal')}    
                />
                <SendButton style={
                    Object.assign(
                        { float: 'left', marginTop: '30px' }, 
                        props.generateColor('transparent', 'transparent', 'white', 'teal')
                    )}    
                />
            </Col>
        </Row>
    );
}

const MessageText = (props) => {
    return (
        <Textarea style={Object.assign({ width: '800px', height: '50px', marginTop:'20px' }, props.areaColor)}
            icon={
                <Button flat waves="light" style={
                    Object.assign({ marginTop:'20px'}, props.buttonColor)}>
                    <Icon>
                        attach_file
                    </Icon>
                </Button>
            }
            placeholder="Write a message..."
        />
    );
}

const SendButton = (props) => {
    return (
        <Button flat style={props.style} waves="light">
            <Icon>
                send
            </Icon>
        </Button>
    );
}