import { useState } from "react";

function Slideshow (props) {
  //useState retourne un tableau avec les 2 éléments currentIndex et setCurrentIndex
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => {
    setCurrentImg(
      currentImg + 1 > props.slides.length - 1 ? 0 : currentImg + 1
    );
  };
  const prevImg = () => {
    setCurrentImg(
      currentImg - 1 < 0 ? props.slides.length - 1 : currentImg - 1
    );
  };
  return (
    <div className="SlideShow text-white">
       {props.slides.length > 1 && (
        <div className="slideClick fa-solid fa-chevron-left" onClick={prevImg} role="button"></div>
      )}
      <div className="slidesWrapper">
        <img key={currentImg} src={props.slides[currentImg]} alt="photos" />
        {props.slides.length > 1 && (
          <div className="slideNumber">{currentImg + 1}/{props.slides.length}</div>
        )}
      </div>
      {props.slides.length > 1 && (
        <div className="slideClick fa-solid fa-chevron-right" onClick={nextImg} role="button"></div>
      )}
    </div>
  );
};

export default Slideshow;