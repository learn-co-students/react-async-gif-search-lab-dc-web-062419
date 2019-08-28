import React from 'react';

const GifList = ({ gifs }) => {
  if (!gifs) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {gifs.map(gif => {
        return <img key={gif.id} src={gif.images.original.url} />;
      })}
    </div>
  );
};

export default GifList;
