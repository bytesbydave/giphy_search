import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import '../css/App.css';

class App extends React.Component {
  renderGifList() {
    if (this.props.error) {
      return <div>Error</div>;
    } 
    if (this.props.isPending) {
      return <div>Pending</div>;
    } else {
      return <GifList gifs={this.props.giphys} />;
    }
  }

  render() {
    return (
      <div className="ui container top-contain">
        <SearchBar />
        <div className="gif-list">{this.renderGifList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    giphys: state.requestGiphys.giphys,
    isPending: state.requestGiphys.isPending,
    error: state.requestGiphys.error
  };
};

export default connect(
  mapStateToProps
)(App);
