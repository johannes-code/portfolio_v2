// components/SkillsDisplay/SkillsDisplay.jsx
export const SkillsDisplay = ({ skillsData, styles }) => {
  if (!skillsData || Object.keys(skillsData).length === 0) {
    return <div>No skills available</div>;
  }

  return (
    <div className={styles.skills_list}>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className={styles.skill_block}>
          <h3 className={styles.skill_block_name}>{category}</h3>
          <ul className={styles.skill_block_list}>
            {skills.map((skill) => (
              <li key={skill._id} className={styles.skill_block_skill}>
                {skill.logo && (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={styles.skill_logo}
                  />
                )}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
