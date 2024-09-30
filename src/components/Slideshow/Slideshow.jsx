import { useState } from "react";

function Slideshow (props) {
  //useState retourne un tableau avec les 2 éléments currentIndex et setCurrentIndex
  //setCurrentIndex permet de modifier la valeur de currentIndex
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = () => {
    setCurrentIndex(
      currentIndex + 1 > props.slides.length - 1 ? 0 : currentIndex + 1
    );
  };
  const prevIndex = () => {
    setCurrentIndex(
      currentIndex - 1 < 0 ? props.slides.length - 1 : currentIndex - 1
    );
  };
  return (
    <div className="SlideShow text-white">
       {props.slides.length > 1 && (
        <div className="slideClick fa-solid fa-chevron-left" onClick={prevIndex} role="button"></div>
      )}
      <div className="slidesWrapper">
        <img key={currentIndex} src={props.slides[currentIndex]} alt="photos" />
        {props.slides.length > 1 && (
          <div className="slideNumber">{currentIndex + 1}/{props.slides.length}</div>
        )}
      </div>
      {props.slides.length > 1 && (
        <div className="slideClick fa-solid fa-chevron-right" onClick={nextIndex} role="button"></div>
      )}
    </div>
  );
};

export default Slideshow;