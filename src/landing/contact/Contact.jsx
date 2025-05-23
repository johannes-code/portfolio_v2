import { useEffect, useState } from "react";
import { getContactData } from "../../lib/api";
import styles from "./contact.module.css";

// Import your icons
import discordIcon from "../../icons/discord.svg"; // adjust paths as needed
import emailIcon from "../../icons/email.svg";
import githubIcon from "../../icons/github.svg";
import linkedinIcon from "../../icons/linkedin.svg";
import twitterIcon from "../../icons/twitter.svg";

const iconMap = {
  discord: discordIcon,
  email: emailIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  twitter: twitterIcon,
};

export const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const data = await getContactData();
      setContactData(data);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!contactData) {
    return <div>No contact data found</div>;
  }

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.h2}>{contactData.title}</h2>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__media}>
          <div className={styles.contacts__list}>
            {/* Email Contact */}
            <a className={styles.contact} href={`mailto:${contactData.email}`}>
              <img src={iconMap.email} alt="Email Icon" />
              <div className={styles.contact__name}>{contactData.email}</div>
            </a>

            {/* Social Media Links */}
            {contactData.socials &&
              contactData.socials.map((social, index) => (
                <a
                  key={index}
                  className={styles.contact}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconMap[social.platform]}
                    alt={`${social.platform} Icon`}
                  />
                  <div className={styles.contact__name}>{social.platform}</div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
