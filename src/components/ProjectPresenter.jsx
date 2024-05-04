import { useState } from 'react';
import ButtonImageSelector from '../components/ButtonImageSelector'
import '../styles/ProjectPresenter.css'

const ProjectPresenter = () => {

  const images = [
    {
      src: './YumYumOrdering-all-500.png',
      description: 'Description for Image 1',
      title: 'Ordering app in React'
    },
    {
      src: './Sladalen-1-500.png',
      description: 'Description for Image 2',
      title: 'Sladalen-ancestors web-page' 
    },
    {
      src: './Sladalen-2-500.png',
      description: 'Description for Image 3',
      title: 'sfhh'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex===0) {
        return images.length -1;
      } else {
        return prevIndex -1; 
      }
    });
  };

  return (
    <>
    <div className='projectPresenter'>
      <h2>main</h2>
        <div className="button__container">
          <ButtonImageSelector onClick={prevImage} className='buttonRwd'></ButtonImageSelector>
          <ButtonImageSelector onClick={nextImage} className='buttonFwd'></ButtonImageSelector>
        </div>
      
        <div className="project-container">
          <h2 className='project__title'>{images[currentImageIndex].title}</h2>
          <p className='project__description'>{images[currentImageIndex].description}</p>
          <img className="image-container"
          src={images[currentImageIndex].src}
          alt={`Image ${currentImageIndex}`}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectPresenter