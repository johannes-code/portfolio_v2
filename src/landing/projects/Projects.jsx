import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";
import button from "../../components/button/button.module.css";
import { getProjects } from "../../lib/api";

export const Projects = () => {
  window.scrollTo(0, 0);
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allProjects = await getProjects();
        console.log(allProjects);
        const sortedProjects = allProjects
          .sort((a, b) => a.order - b.order)
          .slice(0, 3);
        setProjectData(sortedProjects);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>{error}</div>;

  console.log(projectData);

  return (
    <section className={styles.projects} id="projects">
      <div>
        <div className={styles.projects_header}>
          <h2 className={styles.h2}>Projects</h2>
          <Link className={styles.projects_link} to="/project/">
            View All
          </Link>
        </div>
        <div className={styles.project_list}>
          {projectData.map((project) => (
            <div key={project.id} className={styles.project}>
              {/* 1. Picture */}
              <img
                src={project.coverPhoto}
                alt={project.name}
                className={styles.project_image}
              />

              {/* 2. Project Name */}
              <h3 className={styles.h3}>{project.name}</h3>

              {/* 3. Tech Used (Skills) */}
              <ul className={styles.project_techs}>
                {project.technologies && project.technologies.length > 0 ? (
                  project.technologies.map((tech, index) => (
                    <li
                      key={`${tech}-${index}`}
                      className={styles.project_tech}
                    >
                      {tech}
                    </li>
                  ))
                ) : (
                  <li>No technologies listed</li>
                )}
              </ul>

              {/* 4. Description */}
              <p>{project.description}</p>

              {/* 5. Button/Link */}
              <Link
                to={`/project/${project.name}`}
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
