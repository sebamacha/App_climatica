import React, { useState, useEffect } from "react";
import "../assets/css/randomimage.css";
import img1 from "../assets/img/img1.webp";
import img2 from "../assets/img/img2.webp";
import img3 from "../assets/img/img3.webp";
import img4 from "../assets/img/img4.webp";
import img5 from "../assets/img/img5.webp";

const images = [
  { url: img1, alt: "Image 1" },
  { url: img2, alt: "Image 2" },
  { url: img3, alt: "Image 3" },
  { url: img4, alt: "Image 4" },
  { url: img5, alt: "Image 5" },
];

const RandomImage = () => {
  // State variables
  const [randomImage, setRandomImage] = useState({});

  // Function to get a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Render the component
  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  // Use the <img> tag to display the image
  return (
    <img className={`img-random`} src={randomImage.url} alt={randomImage.alt} />
  );
};

export default RandomImage;
