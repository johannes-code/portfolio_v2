import { useState, useEffect } from "react";
import { getAboutData } from "../../lib/api";
import { PortableText } from "@portabletext/react";
import styles from "./about.module.css";
import button from "../../components/button/button.module.css";
import { Link } from "react-router-dom";

export const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const data = await getAboutData();
      setAboutData(data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!aboutData) {
    return <div>Error loading about data.</div>;
  }

  return (
    <section className={styles.about} id="about-me">
      <div className={styles.about_content}>
        <h2 className={styles.h2}>{aboutData.title}</h2>
        <div className={styles.about_text}>
          <div className={styles.about_description}>
            <PortableText value={aboutData.description} />
          </div>
        </div>
        <Link to="/about_me" className={button._button_button_primary}>
          {aboutData.buttonText || "View all"}
        </Link>
      </div>
    </section>
  );
};
