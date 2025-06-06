import styles from "./about.module.css";
import button from "../../components/button/button.module.css";
import { Link } from "react-router-dom";
import { getAboutData } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";
import { PortableText } from "@portabletext/react"; // Add this import

export const About = () => {
  const { data: aboutData, loading, error } = useAsyncData(getAboutData);

  if (loading) return <div>Loading about...</div>;
  if (error) return <div>Failed to load about data</div>;

  return (
    <section className={styles.about} id="about-me">
      <div className={styles.about_content}>
        <h2 className={styles.h2}>{aboutData?.title}</h2>
        <div className={styles.about_text}>
          {aboutData?.description && (
            <div className={styles.about_description}>
              {Array.isArray(aboutData.description) ? (
                <PortableText value={aboutData.description} />
              ) : (
                <p>{aboutData.description}</p>
              )}
            </div>
          )}
        </div>
        <Link to="/about_me" className={button._button_button_primary}>
          {aboutData?.buttonText}
        </Link>
      </div>
    </section>
  );
};
