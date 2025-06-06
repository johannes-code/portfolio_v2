// components/SkillsDisplay/SkillsDisplay.jsx
import PropTypes from "prop-types";

export const SkillsDisplay = ({ skillsData, styles }) => {
  if (!skillsData || Object.keys(skillsData).length === 0) {
    return <div>No skills to display</div>;
  }

  return (
    <div className={styles.skills_list}>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className={styles.skill_block}>
          <h3 className={styles.skill_block_name}>{category}</h3>
          <ul className={styles.skill_block_list}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skill_block_skill}>
                {/* If you have logos, uncomment this:
                {skill.logo && (
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className={styles.skill_logo} 
                  />
                )}
                */}
                {typeof skill === "string" ? skill : skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
SkillsDisplay.propTypes = {
  skillsData: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          logo: PropTypes.string,
        }),
      ])
    )
  ).isRequired,
  styles: PropTypes.shape({
    skills_list: PropTypes.string,
    skill_block: PropTypes.string,
    skill_block_name: PropTypes.string,
    skill_block_list: PropTypes.string,
    skill_block_skill: PropTypes.string,
    skill_logo: PropTypes.string,
  }).isRequired,
};
