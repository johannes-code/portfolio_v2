import { useEffect, useState } from "react";
import { getHeroData } from "../../lib/api";
import styles from "./hero.module.css";
import button from "../../components/button/button.module.css";

export const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const data = await getHeroData();
      setHeroData(data);
    } catch (error) {
      console.error("Error fetching hero data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!heroData) {
    return <div>No hero data found</div>;
  }

  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.hero_text}>
          {heroData.logo && (
            <img src={heroData.logo} alt="Logo" className={styles.hero_logo} />
          )}

          <h1
            className={styles.hero_title}
            dangerouslySetInnerHTML={{ __html: heroData.title }}
          ></h1>

          <div className={styles.hero_description}>{heroData.description}</div>

          <div className={styles.hero_status}>{heroData.status}</div>

          <a className={button._button_button_primary} href="#contacts">
            {heroData.buttonText}
          </a>
        </div>

        <div className={styles.hero_images}>
          {heroData.mainImage && (
            <img
              src={heroData.mainImage}
              alt="Main hero"
              className={styles.hero_main_image}
            />
          )}

          {heroData.secondaryImages && heroData.secondaryImages.length > 0 && (
            <div className={styles.hero_secondary_images}>
              {heroData.secondaryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Secondary ${index + 1}`}
                  className={styles.hero_secondary_image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
