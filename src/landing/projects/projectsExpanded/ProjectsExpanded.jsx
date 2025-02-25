import { useParams } from "react-router-dom";
import styles from "./projectsExpanded.module.css";
import PropTypes from "prop-types";
import { RenderTechSkills } from "../../../components/functions/RenderTechSkills";
import data from "../../../locales/en.json";

export const ProjectsExpanded = () => {
  const { id } = useParams();
  const projectIndex = parseInt(id, 10);
  const currentProject = data?.projectsExpanded[projectIndex];

  if (!currentProject) {
    return <div>No project data available.</div>;
  }

  return (
    <div className={styles.projectsExpanded}>
      <div>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <RenderTechSkills
          techArray={currentProject.tech}
          ulClassName={styles.project_techs}
          liClassName={styles.project_tech}
        />
        <p>{currentProject.link}</p>
        <img src={currentProject.screenshot} alt={currentProject.name} />
        {currentProject.long_desc &&
          currentProject.long_desc.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        {currentProject.learned &&
          currentProject.learned.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        {currentProject.missed &&
          currentProject.missed.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        {currentProject.why &&
          currentProject.why.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        <button
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % data.projectsExpanded.length
            )
          }
        >
          Next Project
        </button>
      </div>
    </div>
  );
};

ProjectsExpanded.propTypes = {
  // data: PropTypes.shape({
  projectsExpanded: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
      screenshot: PropTypes.string,
      long_desc: PropTypes.arrayOf(
        PropTypes.shape({
          heading: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
      learned: PropTypes.arrayOf(
        PropTypes.shape({
          heading: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
      missed: PropTypes.arrayOf(
        PropTypes.shape({
          heading: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
      why: PropTypes.arrayOf(
        PropTypes.shape({
          heading: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  // }).isRequired,
};
