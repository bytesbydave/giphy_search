import React from 'react';
import GifItem from './GifItem';

const GifList = ({ gifs }) => {
  const renderedGif = gifs.map((gif) => {
    return(
      <GifItem gif={gif} key={gif.id} />
    );
  });
  return(
    <div>
      {renderedGif}
    </div>
  );
}

export default GifList;