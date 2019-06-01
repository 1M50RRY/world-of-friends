import React from 'react';
import '../../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CountrySelector from './selectors/countrySelector'
import GenderSelector from './selectors/genderSelector'
import { Textarea, Modal, Button } from 'react-materialize'


const FindFriend = (props) => {
    return (
        <Modal header="Search for new friends" fixedFooter trigger={
            <Button waves="light" className='teal' style={{ marginTop: '13px', marginBottom: '20px', marginRight: '10px' }}>
                FIND NEW FRIEND
            </Button>
        }>
            <Textarea icon="chat" label="Your message" />
            <GenderSelector />
            <CountrySelector />
            <Button className="teal" style={{ marginTop: '270px', width: '100%' }}>Send</Button>
        </Modal>
    );
}

export default FindFriend;