import React from 'react';
import '../../../css/chats.css'
import { Textarea, Icon, Col, Button, Row } from 'react-materialize'

export const SendForm = (props) => {
    return (
        <Row>
            <Col 
                m={9} 
                offset="m3" 
                style={{ borderLeft: '1px solid #E9EBED', borderTop: '1px solid #E9EBED', marginLeft: '319px', marginTop: '-109px', height: '50px' }}
            >
                <Textarea style={Object.assign({ width: '800px', height: '50px', marginTop:'20px' }, 
                    props.generateColor('transparent ', 'transparent', 'white', 'black'))}
                    icon={
                        <Button flat waves="light" style={
                            Object.assign({ marginTop:'20px'}, props.generateColor('transparent', 'transparent', 'white', 'teal'))}>
                            <Icon>
                                attach_file
                            </Icon>
                        </Button>
                    }
                    placeholder="Write a message..."
                />
                <Button flat style={Object.assign({ float: 'left', marginTop: '30px' }, props.generateColor('transparent', 'transparent', 'white', 'teal'))} waves="light">
                    <Icon>
                        send
                    </Icon>
                </Button>
            </Col>
        </Row>
    );
}