import { useParams, Link } from "react-router-dom";
import styles from "./projectsExpanded.module.css";
import buttonStyles from "../../../components/button/button.module.css";
import { useState, useEffect } from "react";
import { getProjectById } from "../../../lib/api";

export const ProjectsExpanded = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to load projectdetails");
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div>Loading project details...</div>;
  if (error) return <div>{error}</div>;
  if (!project) return <div>No project data available.</div>;

  return (
    <div className={styles.projectsExpanded_container}>
      <div>
        <h2 className={styles.h2}>{project.name}</h2>
        <div className={styles.techSkillsContainer}>
          <ul className={styles.projectExpanded_techs}>
            {project.technologies &&
              project.technologies.map((tech, index) => (
                <li
                  key={`${tech}-${index}`}
                  className={styles.projectExpanded_tech}
                >
                  {tech}
                </li>
              ))}
          </ul>
        </div>

        <img
          src={project.coverPhoto}
          alt={project.name}
          className={styles.projectsExpanded_cover}
        />
        <div className={project.screenshots}>
          {project.screenshots &&
            project.screenshots.map((screenshots) => (
              <img
                key={screenshots._key}
                src={screenshots.asset.url}
                alt={project.name}
                className={styles.projectsExpanded_screenshots}
              />
            ))}
        </div>
        <p className={styles.ProjectsExpanded_purpose}>
          <b>URL:</b>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>

        <div className={styles.currentProjectContainer}>
          {project.long_desc &&
            project.long_desc.map((item) => (
              <div key={item._key}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
          {project.learned &&
            project.learned.map((item) => (
              <div key={item._key}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
          {project.missed &&
            project.missed.map((item) => (
              <div key={item._key}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
          {project.why &&
            project.why.map((item) => (
              <div key={item._key}>
                <h4 className={styles.projectsExpanded_h4}>{item.heading}</h4>
                <p className={styles.projectsExpanded_content}>
                  {item.content}
                </p>
              </div>
            ))}
        </div>
        <div>
          <Link to="/project" className={buttonStyles._button_button_primary}>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
