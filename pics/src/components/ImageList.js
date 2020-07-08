import React from "react";

const ImageList = ({ images }) => {
  return images.map((image) => {
    return <img src={image.urls.regular} alt="" />;
  });
};

export default ImageList;
