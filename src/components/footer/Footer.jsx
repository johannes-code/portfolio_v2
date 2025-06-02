// components/footer/Footer.jsx
import styles from "./footer.module.css";
import { getFooterData, getSocialLinks } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";

export const Footer = () => {
  const { data: footerData, loading: footerLoading } =
    useAsyncData(getFooterData);
  const { data: socialData, loading: socialLoading } =
    useAsyncData(getSocialLinks);

  if (footerLoading || socialLoading) return <div>Loading footer...</div>;

  const currentYear = new Date().getFullYear();

  // Filter social links for footer
  const footerLinks =
    socialData?.links?.filter((link) => link.showIn?.includes("footer")) || [];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {footerData?.logo && (
            <img
              src={footerData.logo}
              alt="Logo"
              className={styles.logoImage}
            />
          )}
        </div>

        <div className={styles.centerContent}>
          <a
            href={`mailto:${footerData?.email}`}
            className={styles.footer_email}
          >
            {footerData?.email}
          </a>
          <div className={styles.footer_copyright}>
            {footerData?.copyright} {currentYear}
          </div>
          {footerData?.description && (
            <p className={styles.footer_description}>
              {footerData.description}
            </p>
          )}
        </div>

        <div className={styles.footer_media}>
          <div className={styles.footer_list}>
            {footerLinks.map((link) => (
              <a
                key={link.platform}
                className={styles.media}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.displayName}
              >
                <img src={link.icon} alt={`${link.platform} Icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
