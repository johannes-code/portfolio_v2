import { useState, useEffect } from "react";
import {
  getAboutPageData,
  getSocialLinks,
  getSkillsGrouped,
} from "../../../lib/api";
import { PortableText } from "@portabletext/react";
import styles from "./aboutExpanded.module.css";
import { SkillsDisplay } from "../../../components/SkillsDisplay/SkillsDisplay";

export const AboutExpanded = () => {
  const [aboutData, setAboutData] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [skillsData, setSkillsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [about, socials, skills] = await Promise.all([
        getAboutPageData(),
        getSocialLinks(),
        getSkillsGrouped(), // ✅ Changed from getAllSkills()
      ]);

      setAboutData(about);
      setSocialLinks(socials);

      const groupedSkills = skills.reduce((acc, category) => {
        acc[category.name] = category.skills;
        return acc;
      }, {});

      setSkillsData(groupedSkills);
    } catch (error) {
      console.error("Error fetching about page data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!aboutData) {
    return <div>No about data found</div>;
  }

  return (
    <section className={styles.AboutExpandedSection}>
      <h2 className={styles.h2}>About Me</h2>

      <div className={styles.AboutExpanded_container}>
        <div className={styles.contactinfo}>
          <h4>name</h4>
          <p>{aboutData.name}</p>
        </div>

        <div className={styles.AboutContainer}>
          {aboutData.sections?.map((section, index) => (
            <div key={index}>
              <h4 className={styles.about_expanded_h4}>{section.title}</h4>
              <div className={styles.portable_text_content}>
                <PortableText value={section.content} />
              </div>
            </div>
          ))}
        </div>

        <div>
          <SkillsDisplay skillsData={skillsData} styles={styles} />
        </div>
      </div>
    </section>
  );
};
