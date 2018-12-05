import React from 'react';
import '../css/GifItem.css'

// function facebook(url) {
//   return `https://www.facebook.com/sharer/sharer.php?u=${url}`
// }

// function twitter(url) {
//   return `https://twitter.com/home?status=${url}`
// }


const GifItem = ({ gif }) => {
  return (
    <div className="image-container">
      {/* <div className="social-media-container hide-social-media-container">
        <a href={facebook(gif.bitly_gif_url)}>
          <button className="ui facebook button">
            <i className="facebook icon"></i>
            Facebook
          </button>
        </a>
        <a href={twitter(gif.bitly_gif_url)} >
          <button className="ui twitter button">
            <i className="twitter icon"></i>
            Twitter
          </button>
        </a>
      </div> */}
    
      <img alt={gif.images.title} src={gif.images.fixed_height_downsampled.url} />
      {/* add twitter send function and facebook send */}
      
    </div>
  );
}

export default GifItem;