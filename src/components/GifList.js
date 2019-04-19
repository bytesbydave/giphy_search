import React from 'react';
import GifItem from './GifItem';
import '../css/GifList.css';

const GifList = ({ gifs }) => {
  const renderedGif = gifs.map(gif => {
    return <GifItem gif={gif} key={gif.id} />;
  });
  return <div className="gif-grid">{renderedGif}</div>;
};

export default GifList;
