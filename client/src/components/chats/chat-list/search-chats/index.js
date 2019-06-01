import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Chip, CollectionItem, Icon, Collection, Col } from 'react-materialize'

class SearchChats extends React.Component {
    render() {
        return (
            <nav style={{ width: '294px', backgroundColor: '#F2F2F2', marginTop: '15px', marginBottom: '10px' }}>
                <div class="nav-wrapper">
                    <div class="input-field">
                        <input id="search" type="search" placeholder='Search' required />
                        <label class="label-icon" for="search"><i style={{ color: "black" }} class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SearchChats;