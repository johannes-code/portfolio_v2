// landing/projects/AllProjects.jsx
import { useEffect } from "react";
import { getProjects, getProjectsPageData } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import styles from "./projects.module.css";

export const AllProjects = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (projectsLoading || pageLoading) {
    return <div>Loading all projects...</div>;
  }

  if (projectsError || pageError) {
    return <div>{projectsError || pageError}</div>;
  }

  return (
    <section className={styles.projects}>
      <div>
        <div className={styles.projects_header}>
          <h1 className={styles.h2}>All {pageData?.title || "Projects"}</h1>
          {pageData?.description && (
            <p className={styles.page_description}>{pageData.description}</p>
          )}
          <p className={styles.projects_count}>
            Showing {allProjects?.length || 0} projects
          </p>
        </div>

        <div className={styles.project_list}>
          {allProjects?.map((project) => (
            <ProjectCard key={project._id} project={project} compact={false} />
          ))}
        </div>
      </div>
    </section>
  );
};
