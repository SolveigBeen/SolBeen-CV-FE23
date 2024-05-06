import FetchData from "../../features/FetchData";
import "../../index.css";
import "./Project.css";

import ProjectPresenter from "../../components/ProjectPresenter/ProjectPresenter";

const Projects = () => {
  return (
    <section className="Project-2col">
      <aside className="Project__aside">
        <FetchData></FetchData>
      </aside>
      <main className="Project__main">
        <ProjectPresenter></ProjectPresenter>
      </main>
    </section>
  );
};

export default Projects;
