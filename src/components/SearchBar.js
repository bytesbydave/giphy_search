import React from 'react';
import { connect } from 'react-redux';

import { requestGiphys, setSearchField } from '../actions';

const SearchBar = ({ searchField, onSearchChange, onTermSubmit }) => {
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Search for a Gif!</label>
          <input
            type="text"
            value={searchField}
            onChange={onSearchChange}
            required
          />
        </div>
        <button
          onClick={onTermSubmit}
          value={searchField}
          className="ui primary button"
        >
          Search!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchField: state.searchGiphys.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTermSubmit: event => dispatch(requestGiphys(event.target.value)),
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
