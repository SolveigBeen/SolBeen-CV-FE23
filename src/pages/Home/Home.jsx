import './Home.css'

import CompetencePresenter from "../../components/CompetencePresenter";

const Home = () => {
  return (
    <section className='Home-2col'>
    
      
        <aside className="Home__aside">
          <img className="Home__portrait" src="../assets/Solveig-Fut.jpg"></img>
          <p className='Home__presentation'>I am an  Interaction Designer with 30 years of work experience. Now, I am further educating myself in FrontEnd development to be even better at contributing to user-friendly websites. Looking forward to contribute with my skills.</p>
        </aside>
        <main className="Home__main">
          <CompetencePresenter></CompetencePresenter>
        </main>
      
    </section>
  );
};

export default Home;
