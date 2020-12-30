import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import ProfileContainer from './ProfileContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
    render() {
        const { loading, characters } = this.props
        return (
            <div className="container">
                <div className="row mt-3 justify-content-center">
                    <SearchForm />
                </div>
                <div className="mt-3">
                    { loading ? <Spinner /> : <ProfileContainer characters={characters} /> }
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    loading: state.data.loading,
    characters: state.data.characters,
})

export default connect(mapStateToProps)(Landing);
