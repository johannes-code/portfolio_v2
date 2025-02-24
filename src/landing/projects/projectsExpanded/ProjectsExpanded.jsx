import { useState } from "react";
import styles from "./projectsExpanded.module.css";
import PropTypes from "prop-types";
import data from "../../../locales/en.json";

const renderArrayContent = (array, title) => {
  return (
    <div>
      <h3>{title}</h3>
      {array.map((item, index) => (
        <div key={index}>
          <p>
            <b>{item.heading}</b>
          </p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export const ProjectsExpanded = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = data.projectsExpanded[currentIndex];

  return (
    <div className={styles.projectsExpanded}>
      <div>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <p>{currentProject.tech}</p>
        <p>{currentProject.link}</p>
        <img src={currentProject.screenshot} alt={currentProject.name} />

        {renderArrayContent(currentProject.long_desc)}
        {renderArrayContent(currentProject.learned)}
        {renderArrayContent(currentProject.missed)}
        {renderArrayContent(currentProject.why)}

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
  data: PropTypes.shape({
    projectsExpanded: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,

        // Add other properties as needed
      })
    ).isRequired,
  }).isRequired,
};
