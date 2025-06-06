// landing/projects/Projects.jsx
import { Link } from "react-router-dom";
import { getProjects, getProjectsPageData } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import styles from "./projects.module.css";

export const Projects = () => {
  const {
    data: allProjects,
    loading: projectsLoading,
    error: projectsError,
  } = useAsyncData(getProjects);

  const {
    data: pageData,
    loading: pageLoading,
    error: pageError,
  } = useAsyncData(getProjectsPageData);

  if (projectsLoading || pageLoading) {
    return <div>Loading projects...</div>;
  }

  if (projectsError || pageError) {
    return <div>{projectsError || pageError}</div>;
  }

  // Get first 3 projects (sorted by order in Sanity)
  const displayProjects = allProjects?.slice(0, 3) || [];

  return (
    <section className={styles.projects} id="projects">
      <div>
        <div className={styles.projects_header}>
          <h2 className={styles.h2}>{pageData?.title || "Projects"}</h2>
          <Link className={styles.projects_link} to="/project/">
            {pageData?.buttonText || "View All"}
          </Link>
        </div>

        <div className={styles.project_list}>
          {displayProjects.map((project) => (
            <ProjectCard key={project._id} project={project} compact={true} />
          ))}
        </div>
      </div>
    </section>
  );
};
