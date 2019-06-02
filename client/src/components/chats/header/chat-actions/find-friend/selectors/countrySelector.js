import React from 'react';
import '../../../../../../css/chats.css'
import { countries, countryData } from '../../../../../../data'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Autocomplete } from 'react-materialize'


class CountrySelector extends React.Component {
    render() {
        return (
            <Autocomplete options={{data: countryData}} placeholder="Country" icon="flag" />
        );
    }
}

export default CountrySelector;