
import FetchData from '../features/FetchData'
import '../index.css'

import ProjectPresenter from '../components/ProjectPresenter';

const Projects = () => {



  return (
    <section>
      <div>Projects</div>
      
      <div  className='section-2Col'>
      <aside className='aside-30'>
        <h2>aside</h2>
        <FetchData></FetchData>
      </aside>
      <main className='main-70'>
        
          <h2>main</h2>
       
        
        
          <ProjectPresenter></ProjectPresenter>
      </main>
     
      </div>
    </section>
  )
}

export default Projects