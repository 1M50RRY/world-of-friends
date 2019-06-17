import React from 'react';
import { Textarea, Icon, Col, Button, Row } from 'react-materialize'

export class SendForm extends React.Component {
    onButtonClicked = ( el ) => {
        let text = document.getElementById(el.id).value;
        if (text.length) {
            this.props.onMessageSend(text);
            document.getElementById(el.id).value = null;
        }
    }

    keyPress = ( el ) => {
        if(el.keyCode === 13){
            this.onButtonClicked(el.target);
            el.preventDefault();
         }
    }

    render () {
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
                    <Textarea style={Object.assign({ width: '800px', height: '50px', marginTop:'20px' }, 
                        this.props.generateColor('transparent ', 'transparent', 'white', 'black'))}
                        placeholder="Write a message..."
                        ref={(el) => this.messageText = el}
                        onKeyDown={this.keyPress}
                    />
                    <Button 
                        flat 
                        style={Object.assign(
                            { float: 'left', marginTop: '30px' }, 
                            this.props.generateColor('transparent', 'transparent', 'white', 'teal')
                        )} 
                        waves="light" 
                        onClick={() => this.onButtonClicked(this.messageText)}>
                        <Icon>
                            send
                        </Icon>
                    </Button>
                </Col>
            </Row>
        );
    } 
}