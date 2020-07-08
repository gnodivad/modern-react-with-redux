import React from "react";

const ImageList = ({ images }) => {
  return images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
};

export default ImageList;
