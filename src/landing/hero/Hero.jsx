// landing/hero/Hero.jsx
import styles from "./hero.module.css";
import button from "../../components/button/button.module.css";
import { getHeroData } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";

export const Hero = () => {
  const { data: heroData, loading, error } = useAsyncData(getHeroData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load hero data</div>;

  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1
          className={styles.hero_title}
          dangerouslySetInnerHTML={{ __html: heroData?.title }}
        ></h1>
        <div className={styles.hero_description}>{heroData?.description}</div>
        <a className={button._button_button_primary} href="#contacts">
          {heroData?.buttonText}
        </a>

        {heroData?.mainImage && (
          <div className={styles.hero_illustrations}>
            <img
              src={heroData.mainImage}
              alt="Hero"
              className={styles.hero_image}
            />
            {heroData?.status && (
              <div className={styles.hero_status}>{heroData.status}</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
