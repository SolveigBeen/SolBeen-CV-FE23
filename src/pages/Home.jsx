import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <section>
    <div>Projects</div>
    
    <div  className='section-2Col'>
    <aside className='aside-30 aside-home'>
      <img className='portrait' src='../assets/Solveig-Fut.jpg'></img>
      </aside>
      <main className='main-70'>
        
          <h2>main</h2>
          <div className='Home__btn-container'>
            <button>Job experience</button>
            <button>Education</button>
            <button>Addtional</button>
          </div>
          <div>
            <p>sldkfldskj</p>
          </div>
          </main>
     
     </div>
   </section>
  )
}

export default Home