import data from "/src/locales/en.json";
import styles from "./projects.module.css";

export const Projects = () => {
    const projectPageData = data.pages.home.projects;
    const projectData = data.projectsExpanded;
    return(
        <section className={styles.projects}>
            <div className={styles.projects_header}>
                <h2 className={styles.h2}> {projectPageData.title} </h2>
                <a className={styles.projects_link} href="/projects">{projectPageData.button} </a>
                </div>
            <div className={styles.project_list}>
                <div className={styles.project}>{projectData.name}</div>
                    <img src="{projectData.screenshot}" alt="" className={styles.project_image}/>
                    <ul className={styles.project_techs}>
                        <li className={styles.project_tech}>{projectData.tech}</li>
                    </ul>
                <div className={styles.project_content}>
                    <div className={styles.project_name}></div>
                    <div className={styles.project_description}></div>
                    <div className={styles.project_links}></div>
                </div>
            </div>            

        </section>
    )
}