import { useState } from 'react';
import './ImageSlider.css';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={goToPrevious}>&lt;</button>
      <img src={images[currentIndex]} alt="motorcycle" className="slider-image" />
      <button className="arrow right" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
