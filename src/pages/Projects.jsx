
import FetchData from '../features/FetchData'
import '../index.css'
import ButtonFwd from '../components/ButtonFwd'
import { useState } from 'react';

const Projects = () => {

  const images = [
    './YumYumOrdering-all-500.png',
    './Sladalen-1-500.png',
  
    './Sladalen-2-500.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const nextImage = () => {
    console.log("Current index:", currentImageIndex);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("New index:", currentImageIndex);
  };

  return (
    <section>
      <div>Projects</div>
      
      <div  className='section-2Col'>
      <aside className='aside-30'>
        <h2>aside</h2>
        <FetchData></FetchData>
      </aside>
      <main className='main-70'>
        <div>
        <h2>main</h2>
        <ButtonFwd onClick={nextImage}></ButtonFwd>
        </div>
        <img src={images[currentImageIndex]} alt="...."></img> 
      </main>
     
      </div>
    </section>
  )
}

export default Projects