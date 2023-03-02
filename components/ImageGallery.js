import React from "react";

const ImageGallery = ({url}) => {

  console.log({url})
  return (
    <div className="">
      <img src={url} alt="photo" className="object-cover h-[100%] w-[100%]"/>
    </div>
  );
};

export default ImageGallery;
