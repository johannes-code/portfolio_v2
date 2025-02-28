export const SkillsList = ({ skillData, styles }) => {
  return (
    <div className={styles.skills_list}>
      {Object.entries(skillData).map(([category, skills]) => (
        <div key={category} className={styles.skill_block}>
          <h3 className={styles.skill_block_name}>{category}</h3>
          <ul className={styles.skill_block_list}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skill_block_skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
