import React from 'react';
import SearchBar from './SearchBar';
import giphy from '../api/giphy';
import GifList from './GifList';
import '../css/App.css';


class App extends React.Component {
  state = { term: '', gifs: [] };

  componentDidMount() {
    this.onTermSubmit('Rick Astley');
  }
  
  onTermSubmit = async (term) => {
    const response = await giphy.get('/v1/gifs/search', {
      params: {
        q: term
      }
    });
    this.setState({ gifs: response.data.data });
  };

  render() {
    return (
      <div className="ui container top-contain">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="gif-list">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;