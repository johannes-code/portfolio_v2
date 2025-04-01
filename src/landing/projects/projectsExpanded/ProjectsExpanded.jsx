import { useParams, Link } from "react-router-dom";
import styles from "./projectsExpanded.module.css";
import data from "../../../locales/en.json";
import { TechSkills } from "../../../components/functions/TechSkills";

export const ProjectsExpanded = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();
  const projectIndex = parseInt(id, 10);
  const currentProject = data?.projectsExpanded[projectIndex];

  if (!currentProject) {
    return <div>No project data available.</div>;
  }

  return (
    <div className={styles.projectsExpanded_container}>
      <div>
        <h2 className={styles.h2}>{currentProject.name}</h2>
        <div className={styles.techSkillsContainer}>
          <TechSkills
            tech={currentProject.tech}
            ulClassName={styles.projectExpanded_techs}
            liClassName={styles.projectExpanded_tech}
          />
        </div>

        <img
          src={currentProject.screenshot}
          alt={currentProject.name}
          className={styles.projectsExpanded_cover}
        />
        <p className={styles.ProjectsExpanded_purpose}>
          <b>URL:</b>
          <Link to={currentProject.link}>{currentProject.link}</Link>
        </p>
        <div className={styles.currentProjectContainer}>
          {currentProject.long_desc &&
            currentProject.long_desc.map((item, index) => (
              <div key={index}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
          {currentProject.learned &&
            currentProject.learned.map((item, index) => (
              <div key={index}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
          {currentProject.missed &&
            currentProject.missed.map((item, index) => (
              <div key={index}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
          {currentProject.why &&
            currentProject.why.map((item, index) => (
              <div key={index}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
