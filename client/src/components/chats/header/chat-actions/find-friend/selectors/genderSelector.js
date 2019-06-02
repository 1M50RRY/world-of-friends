import React from 'react';
import '../../../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Checkbox } from 'react-materialize'


const GenderSelector = (props) => {
    return (
        <div>
            <Checkbox
                value="Male"
                label="Male"
                filledIn
                checked
            />
            <br/>
            <Checkbox
                value="Female"
                label="Female"
                filledIn
                checked
            />
        </div>
    );
}

export default GenderSelector;