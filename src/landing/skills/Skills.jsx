import { useEffect, useState } from "react";
import { getAllSkills } from "../../lib/api";
import { SkillsDisplay } from "../../components/SkillsDisplay/SkillsDisplay";
import styles from "./skills.module.css";

export const Skills = () => {
  const [skillsData, setSkillsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const skills = await getAllSkills();

      // Group skills by category
      const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      }, {});

      setSkillsData(groupedSkills);
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading skills...</div>;
  }

  return (
    <section className={styles.skills}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.skills_content}>
        <div className={styles.skills_illustrations}></div>
        <SkillsDisplay skillsData={skillsData} styles={styles} />
      </div>
    </section>
  );
};
