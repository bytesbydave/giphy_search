import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import giphy from '../api/giphy';
import GifList from '../components/GifList';
import '../css/App.css';

import { requestGiphys, setSearchField } from '../actions';

class App extends React.Component {
  renderGifList() {
    if (this.props.giphys) {
      return <GifList gifs={this.props.giphys} />;
    } else {
      return <div>Error</div>;
    }
  }

  render() {
    const { onSearchChange, giphys, onTermSubmit, error, searchField } = this.props;
    return (
      <div className="ui container top-contain">
        <SearchBar onInputChange={onSearchChange} />
        <button onClick={onTermSubmit} value={searchField} className="ui primary button">
          Search!
        </button>
        <div className="gif-list">{this.renderGifList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchGiphys.searchField,
    giphys: state.requestGiphys.giphys,
    isPending: state.requestGiphys.isPending,
    error: state.requestGiphys.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTermSubmit: (event) => dispatch(requestGiphys(event.target.value)),
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
