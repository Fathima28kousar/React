import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'background-image 0.3s ease', // Added transition property
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const sliderStyles = {
  position: 'relative',
  height: '100%',
  overflow: 'hidden', // Ensure hidden overflow to prevent unwanted scrollbars during transitions
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div {...handlers} style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
    </div>
  );
};

export default ImageSlider;
