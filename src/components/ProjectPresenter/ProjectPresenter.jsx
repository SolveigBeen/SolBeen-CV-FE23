import { useState } from "react";
import ButtonImageSelector from "./ImageSelectorButton/ButtonImageSelector";


const ProjectPresenter = () => {
  const images = [
    {
      src: "./YumYumOrdering-all.png",
      description: "Description for Image 1",
      title: "Ordering app in React",
    },
    {
      src: "./Sladalen-1.png",
      description: "Description for Image 2",
      title: "Sladalen-ancestors web-page",
    },
    {
      src: "./Sladalen-2.png",
      description: "Description for Image 3",
      title: "sfhh",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <section className="projectPresenter">
      <div className="projectPresenter-button__container">
        <ButtonImageSelector
          onClick={prevImage}
          className="buttonRwd"></ButtonImageSelector>
        <ButtonImageSelector
          onClick={nextImage}
          className="buttonFwd"></ButtonImageSelector>
      </div>

      <div className="projectPresenter__gallery">
        <h2 className="projectPresenter__gallery-title">
          {images[currentImageIndex].title}
        </h2>
        <p className="projectPresenter__gallery-description">
          {images[currentImageIndex].description}
        </p>
        <img
          className="projectPresenter__gallery-images"
          src={images[currentImageIndex].src}
          alt={`Image ${currentImageIndex}`}
        />
      </div>
    </section>
  );
};

export default ProjectPresenter;
