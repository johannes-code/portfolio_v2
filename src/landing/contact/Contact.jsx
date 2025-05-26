import { useEffect, useState } from "react";
import { getContactData, getSocialLinks } from "../../lib/api";
import { getIcon } from '../../utils/iconMap'
import styles from "./contact.module.css";

export const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contact, socials] = await Promise.all([
        getContactData(),
        getSocialLinks()
      ]);
      setContactData(contact);
      setSocialLinks(socials);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  
  const contactSocials = socialLinks?.links?.filter(link => 
    link.showIn?.includes('contact')
  ) || [];

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.h2}>{contactData.title}</h2>
      <div className={styles.contact__content}>
        <p className={styles.contact__description}>{contactData.description}</p>
        
        <div className={styles.contact__media}>
          <div className={styles.contact__list}>
            
            {/* Email Contact */}
            <a className={styles.contact} href={`mailto:${contactData.email}`}>
              <img src={getIcon('email')} alt="Email Icon"/>
              <div className={styles.contact__name}>{contactData.email}</div>
            </a>

            {/* ContactSocials instead of socialLinks.links */}
            {contactSocials.map((social, index) => {
              console.log("social platform:", social.platform);
              console.log("Icon path:", getIcon(social.platform.toLowerCase()));
              
              return (
                <a
                  key={index}
                  className={styles.contact}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getIcon(social.platform.toLowerCase())}
                    alt={`${social.platform} Icon`}
                    onError={(e) => console.log('Failed to load icon:', social.platform, e.target.src)}
                    onLoad={() => console.log('Icon loaded:', social.platform)}
                  />
                  <div className={styles.contact__name}>{social.platform}</div>
                </a>
              );
})}
          </div>
        </div>
      </div>
    </section>
  );
};