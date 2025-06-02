// components/ProjectCard/ProjectCard.jsx
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import button from "../button/button.module.css";

export const ProjectCard = ({ project, compact = false }) => {
  const renderTechnologies = () => {
    if (!project.technologies || project.technologies.length === 0) {
      return <li>No technologies listed</li>;
    }

    return project.technologies.map((tech, index) => (
      <li key={`${tech}-${index}`} className={styles.project_tech}>
        {tech}
      </li>
    ));
  };

  return (
    <div className={styles.project}>
      <img
        src={project.coverPhoto}
        alt={project.name}
        className={styles.project_image}
      />

      <h3 className={styles.h3}>{project.name}</h3>

      <ul className={styles.project_techs}>{renderTechnologies()}</ul>

      <p className={compact ? styles.compact_description : undefined}>
        {compact && project.description.length > 100
          ? `${project.description.slice(0, 100)}...`
          : project.description}
      </p>

      <Link
        to={`/project/${project.name}`}
        className={button._button_button_primary}
      >
        View project
      </Link>
    </div>
  );
};

// PropTypes validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverPhoto: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  compact: PropTypes.bool,
};

ProjectCard.defaultProps = {
  compact: false,
};
