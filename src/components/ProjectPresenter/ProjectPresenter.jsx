//This component adds a section that shows images of FrontEnd projects. The images are toggled with two buttons. UseState is used to keep track of which image that is present.

import { useState } from "react";

import './ProjectPresenterStyle.css'
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";


const ProjectPresenter = () => {
  const images = [
    {
      src: "./SolarSystem.png",
      description: "A webplace about our solar system, built with HTML, CSS and vanilla JS.Examination task in JavaScript course.",
      title: "Solaris ",
    },
    {
      src: "./Sladalen-1.png",
      description: "A website including in total 7 pages. Different CSS tecniques are applied: CSS Transitions, CSS Rounded Corners, CSS Animations,CSS Shadow Effects, CSS Opacity / Transparency.   Examination task in 'CSS-based Webdesign' As an own optional subject I made a webplace for my mothers ancestors." ,
      title: "Sladalen",
    },
    {
      src: "./YumYumOrdering-all.png",
      description: "Mobile app for an restaurant ordering made with React. A bootcamp excersize in React course.",
      title: "YumYumOrdering",
    },
   
    {
      src: "./Sladalen-4.png",
      description: "A website including in total 7 pages. Different CSS tecniques are applied: CSS Transitions, CSS Rounded Corners, CSS Animations,CSS Shadow Effects, CSS Opacity / Transparency.   Examination task in 'CSS-based Webdesign' As an own optional subject I made a webplace for my mothers ancestors." ,
      title: "Sladalen",
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
        <ButtonGeneral onClick={prevImage}
          className="buttonRwd"></ButtonGeneral>
          <ButtonGeneral onClick={nextImage}
          className="buttonFwd"></ButtonGeneral>
      </div>

      <div className="projectPresenter__gallery">
        <h2 className="projectPresenter__gallery-title">
          {images[currentImageIndex].title}
        </h2>
        <p className="projectPresenter__gallery-description">
          {images[currentImageIndex].description}
        </p>
        <div className='projectPresenter__gallery-img'>
        <img
          className="projectPresenter__gallery-images"
          src={images[currentImageIndex].src}
          alt={`Image ${currentImageIndex}`}
        />
        </div>
      </div>
    </section>
  );
};

export default ProjectPresenter;
