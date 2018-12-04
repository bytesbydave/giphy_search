import React from 'react';

const GifItem = ({ gif }) => {
  return (
    <div>
      <img alt={gif.images.title} src={gif.images.fixed_height_downsampled.url} />
      {/* add twitter send function and facebook send */}
    </div>
  );
}

export default GifItem;