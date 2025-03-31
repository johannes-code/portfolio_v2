import data from "/src/locales/en.json";
import styles from "./projects.module.css";
import button from "../../components/button/button.module.css";
import { Link } from "react-router-dom";

export const Projects = () => {
  window.scrollTo(0, 0);
  const projectPageData = data.pages.home.projects;
  const projectData = data.projectsExpanded.slice(-3).reverse();
  const skillData = data.skill;

  return (
    <section className={styles.projects} id="projects">
      <div>
        <div className={styles.projects_header}>
          <h2 className={styles.h2}>{projectPageData.title}</h2>
          <Link className={styles.projects_link} to="/project/">
            {projectPageData.button}
          </Link>
        </div>
        <div className={styles.project_list}>
          {projectData.map((project, projectIndex) => (
            <div key={project.name + projectIndex} className={styles.project}>
              {/* 1. Picture */}
              <img
                src={project.screenshot}
                alt={project.name}
                className={styles.project_image}
              />

              {/* 2. Project Name */}
              <h3>{project.name}</h3>

              {/* 3. Tech Used (Skills) */}
              <ul className={styles.project_techs}>
                {project.tech && project.tech.length > 0 ? (
                  project.tech.map((techItem, techIndex) => {
                    if (
                      typeof techItem !== "string" ||
                      !techItem.includes(".")
                    ) {
                      console.error("Invalid tech item:", techItem);
                      return null;
                    }

                    const [category, indices] = techItem.split(".");
                    if (!skillData[category]) {
                      console.error("Invalid category:", category);
                      return null;
                    }

                    const indexArray = indices.split(",");

                    return indexArray.map((index, skillIndex) => {
                      const skill = skillData[category][index];
                      if (!skill) {
                        console.error(`Invalid skill at ${category}[${index}]`);
                        return null;
                      }

                      return (
                        <li
                          key={`${skill}-${techIndex}-${skillIndex}`}
                          className={styles.project_tech}
                        >
                          {skill}
                        </li>
                      );
                    });
                  })
                ) : (
                  <li>No skills listed</li>
                )}
              </ul>

              {/* 4. Description */}
              <p>{project.description}</p>

              {/* 5. Button/Link */}
              <Link
                to={`/project/${projectIndex}`}
                className={button._button_button_primary}
              >
                View project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
