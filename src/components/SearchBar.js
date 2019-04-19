import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestGiphys } from '../actions';

class SearchBar extends React.Component {

  render() {
    const { searchField, onInputChange, onFormSubmit } = this.props;
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Search for a Gif!</label>
            <input
              type="text"
              value={searchField}
              onChange={onInputChange}
              required
            />
          </div>   
        </div>
      </div>
    );
  }
}

// const SearchBar = ({ searchField, onInputChange, onFormSubmit }) => {
//   return (
//     <div className="ui segment">
//       <form onSubmit={onFormSubmit} className="ui form">
//         <div className="field">
//           <label>Search for a Gif!</label>
//           <input
//             type="text"
//             value={searchField}
//             onChange={onInputChange}
//             required
//           />
//         </div>
//         <button className="ui primary button">Search!</button>
//       </form>
//     </div>
//   );
// };

export default SearchBar;
