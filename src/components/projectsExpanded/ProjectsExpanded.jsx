import data from "/src/locales/en.json";
import styles from "./projectsExpanded.module.css"
import { useParams } from "react-router-dom";

export const projectsExpanded = () => {
    const { id } = useParams;
    const project = data.projectsExpanded[id]

return (
    <div className={styles.projectsExpanded}>
        <h2>{project.name}</h2>
        <img src={project.screenshot} alt={project.name} />
        <p>{project.description}</p>

    </div>

    );
};

