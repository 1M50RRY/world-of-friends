import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    SideNav, Select, Textarea, Modal, Switch, Chip, CollectionItem, Icon, Collection,
    TextInput, NavItem, Navbar, Col, SideNavItem, Button, Row
} from 'react-materialize'


const Interlocutor = (props) => {
    return (
        <React.Fragment>
            <Col m={1}>
                    <img src="https://www.countryflags.io/be/shiny/64.png" />
                </Col>
            <Col m={2}>
                <p className="main-text header"><b>Julia</b></p>
                <p className="gray-text header">last seen yesterday at 15:43</p>
            </Col>
        </React.Fragment>
    );
}

export default Interlocutor;