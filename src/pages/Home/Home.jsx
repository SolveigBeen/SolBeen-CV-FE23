import "./Home.css";

import CompetencePresenter from "../../components/CompetencePresenter/CompetencePresenter";

const Home = () => {
  return (
    <section className="Home-2col">
      <aside className="Home__aside">
        <img className="Home__portrait" src="../assets/Solveig-Fut.jpg"></img>
        <p className="Home__presentation">
          As an Interaction Designer with over 30 years of professional
          experience, I am expanding my expertise in FrontEnd development to
          enhance my ability to create user-friendly websites. I am enthusiastic
          about leveraging my extensive background and apply my skills to create
          engaging and intuitive digital experiences."
        </p>
      </aside>
      <main className="Home__main">
        <CompetencePresenter></CompetencePresenter>
      </main>
    </section>
  );
};

export default Home;
