import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });
  }, []);

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt="dog" />
      ))}
    </div>
  );
}

export default DogPics;
