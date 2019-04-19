import React from 'react';
import '../css/GifItem.css'

const GifItem = ({ gif }) => {
  return (
    <div className="image-container">
      <img alt={gif.images.title} src={gif.images.fixed_height_downsampled.url} />
    </div>
  );
}

export default GifItem;