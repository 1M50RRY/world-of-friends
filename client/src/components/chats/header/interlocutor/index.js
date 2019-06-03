import React from 'react';
import '../../../../css/chats.css'
import { Col } from 'react-materialize'

const Interlocutor = (props) => {
    return (
        <React.Fragment>
            <Col m={1}>
                {props.country ? <CountryFlag country={props.country} /> : null}
            </Col>
            <Col m={2}>
                <p className="main-text header"><b>{props.name}</b></p>
                <p 
                    className="gray-text header" 
                    style={ props.generateColor('transparent', 'transparent', '#cfd8dc', '#b2dfdb' ) }
                >
                    {props.lastSeen}
                </p>
            </Col>
        </React.Fragment>
    );
}

const CountryFlag = (props) => {
    return (
        <img src={`https://www.countryflags.io/${props.country}/shiny/64.png`} alt={props.country}/>
    );
}

export default Interlocutor;