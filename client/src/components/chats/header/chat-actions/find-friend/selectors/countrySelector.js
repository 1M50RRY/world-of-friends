import React from 'react';
import '../../../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Select } from 'react-materialize'


const CountrySelector = (props) => {
    return (
        <Select value="" icon="flag">
            <option value="" disabled>
                Country
                </option>
            <option value="3">
                Doesn't matter
                </option>
        </Select>
    );
}

export default CountrySelector;