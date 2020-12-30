import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchCharacter, fetchCharacters, setLoading } from '../../actions/searchActions'

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchCharacter(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchCharacters(this.props.text);
        this.props.setLoading()
    }

    render() {
        return (
            <form className="col-12 my-2 my-lg-0" onSubmit={this.onSubmit}>
                <div className="form-group row justify-content-center">
                    <div className="col-md-5 offset-md-1">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search your favourite character"
                            aria-label="Search"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-1 text-center">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            onClick={this.onSubmit}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    text: state.data.text
})

export default connect(mapStateToProps, { searchCharacter, fetchCharacters, setLoading })(SearchForm);
