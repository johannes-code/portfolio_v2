import { useEffect, useState } from "react";
import { getContactData, getSocialLinks } from "../../lib/api";
import { getIcon } from "../../utils/iconMap";
import styles from "./footer.module.css";

export const Footer = () => {
  const [contactData, setContactData] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contact, socials] = await Promise.all([
        getContactData(),
        getSocialLinks(),
      ]);
      setContactData(contact);
      setSocialLinks(socials);
    } catch (error) {
      console.error("Error fetching footer data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null; // Or a loading skeleton
  }

  // Filter for footer socials
  const footerSocials =
    socialLinks?.links?.filter((link) => link.showIn?.includes("footer")) || [];

  // Find email from socials or contact data
  const emailContact = footerSocials.find(
    (social) => social.platform?.toLowerCase() === "email"
  );
  const emailAddress =
    emailContact?.url || contactData?.email || "johannes@gjeset.no";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {/* <img className={styles.logoImage} src="/logo.svg" alt="logo" /> */}
        </div>

        <div className={styles.centerContent}>
          <a href={`mailto:${emailAddress}`} className={styles.footer_email}>
            {emailContact?.displayName || emailAddress}
          </a>
          <div className={styles.footer_copyright}>
            © {currentYear} Made with ❤️ by Johannes
          </div>
        </div>

        <div className={styles.footer_media}>
          <div className={styles.footer_list}>
            {footerSocials.map((social, index) => {
              if (social.platform?.toLowerCase() === "email") {
                return null;
              }

              const isEmail = social.platform?.toLowerCase() === "email";
              const href = isEmail ? `mailto:${social.url}` : social.url;

              return (
                <a
                  key={index}
                  className={styles.media}
                  href={href}
                  target={isEmail ? "_self" : "_blank"}
                  rel={isEmail ? "" : "noopener noreferrer"}
                  title={social.displayName || social.platform}
                >
                  <img
                    src={getIcon(social.platform.toLowerCase())}
                    alt={`${social.platform} Icon`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
