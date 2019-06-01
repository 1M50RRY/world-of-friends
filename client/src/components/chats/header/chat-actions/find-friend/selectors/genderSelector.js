import React from 'react';
import '../../../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Select } from 'react-materialize'


const GenderSelector = (props) => {
    return (
        <Select value="" icon="people">
            <option value="" disabled>
                Gender
                </option>
            <option value="1">
                Male
                </option>
            <option value="2">
                Female
                </option>
            <option value="3">
                Doesn't matter
            </option>
        </Select>
    );
}

export default GenderSelector;