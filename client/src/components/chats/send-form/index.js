import React from 'react';
import '../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Textarea, Icon, Col, Button, Row } from 'react-materialize'

export const SendForm = (props) => {
    return (
        <Row>
            <Col m={9} offset="m3" style={{ borderLeft: '1px solid #E9EBED', marginLeft: '319px', marginTop: '-110px' }}>
                <Textarea style={{ width: '800px' }}
                    icon={
                        <Button flat waves="light">
                            <Icon>
                                attach_file
                            </Icon>
                        </Button>
                    }
                    placeholder="Write a message..."
                />
                <Button flat style={{ color: 'teal', float: 'left', marginTop: '10px' }} waves="light">
                    <Icon>
                        send
                    </Icon>
                </Button>
            </Col>
        </Row>
    );
}