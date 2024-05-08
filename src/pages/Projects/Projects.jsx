import '../../components/ProjectsOnGitHub/ProjectsOnGitHub'
import "../../index.css";
import "./Project.css";

import ProjectPresenter from "../../components/ProjectPresenter/ProjectPresenter";
import ProjectsOnGitHub from "../../components/ProjectsOnGitHub/ProjectsOnGitHub";

const Projects = () => {
  return (
    <section className="Project-2col">
      <aside className="Project__aside">
        <ProjectsOnGitHub></ProjectsOnGitHub>
      </aside>
      <main className="Project__main">
        <ProjectPresenter></ProjectPresenter>
      </main>
    </section>
  );
};

export default Projects;
