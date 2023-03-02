import React from "react";

const ImageGallery = ({url}) => {

  console.log({url})
  return (
    <div>
      <img src={url} alt="photo" />
    </div>
  );
};

export default ImageGallery;
