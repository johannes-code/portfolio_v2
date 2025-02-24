import { useParams } from 'react-router-dom';
import data from "/src/locales/en.json";

export const ProjectsExpanded = () => {
  const { id } = useParams();
  const project = data.projectsExpanded[parseInt(id, 10)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectsExpanded}>
      <h2>{project.name}</h2>
      <img src={project.screenshot} alt={project.name} />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
      
      <h3>Long Description</h3>
      {project.long_desc.map((item, index) => (
        <div key={index}>
          <h4>{item.heading}</h4>
          <p>{item.content}</p>
        </div>
      ))}

      {/* Similarly, you can map through 'learned', 'missed', and 'why' arrays */}
    </div>
  );
};
