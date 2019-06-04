import React from 'react';
import '../../../../../css/chats.css'
import CountrySelector from './selectors/countrySelector'
import GenderSelector from './selectors/genderSelector'
import { Textarea, Modal, Button } from 'react-materialize'


const FindFriend = (props) => {
    return (
        <Modal header="Search for new friends" style={props.generateColor('#607d8b', 'white', 'white', 'black')} fixedFooter trigger={
            <Button 
                waves="light"  
                style={
                        Object.assign({}, { 
                            WebkitBoxShadow: 'none', 
                            boxShadow: 'none', 
                            marginTop: '13px', 
                            marginBottom: '20px', 
                            marginRight: '10px' 
                        },
                        props.generateColor('#37474f', '#009688', 'white', 'white'))
                    }
            >
                FIND NEW FRIEND
            </Button>
        }>
            <Textarea icon="chat" label="Your message" style={props.generateColor('transparent', 'transparent', 'white', 'black')}/>
            <CountrySelector generateColor={props.generateColor} />
            <GenderSelector generateColor={props.generateColor} />
            <Button 
                style={
                    Object.assign({}, 
                        { marginTop: '270px', width: '100%' },
                        props.generateColor('#37474f', '#009688', 'white', 'white')
                    )
                    }
            >
                Send
            </Button>
        </Modal>
    );
}

export default FindFriend;