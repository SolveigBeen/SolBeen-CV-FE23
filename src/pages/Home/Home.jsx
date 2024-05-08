import "./Home.css";

import CompetencePresenter from "../../components/CompetencePresenter/CompetencePresenter";

const Home = () => {
  return (
    <section className="Home-2col">
      <aside className="Home__aside">
        <img className="Home__portrait" src="../assets/Solveig-Fut.jpg"></img>
        <p className="Home__presentation">
          I am an Interaction Designer with over 30 years of professional
          experience. To
          enhance my ability to create user-friendly websites I am now expanding my expertise in FrontEnd development. Looking forward to apply my skills and extensive background to create engaging and intuitive digital experiences.
        </p>
      </aside>
      <main className="Home__main">
        <CompetencePresenter></CompetencePresenter>
      </main>
    </section>
  );
};

export default Home;
