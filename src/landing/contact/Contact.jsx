import { useEffect, useState } from "react";
import { getContactData, getSocialLinks } from "../../lib/api";
import { getIcon } from '../../utils/iconMap'
import styles from "./contact.module.css";
import { PortableText } from '@portabletext/react';

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
      <div className={styles.contact__description}>
        <PortableText value={contactData.description} /> </div>
      
      <div className={styles.contact__media}>
        <div className={styles.contact__list}>
          {contactSocials.map((contact, index) => {
            const isEmail = contact.platform.toLowerCase() === 'email';
            const href = isEmail ? `mailto:${contact.url}` : contact.url;
            
            return (
              <a
                key={index}
                className={styles.contact}
                href={href}
                target={isEmail ? '_self' : '_blank'}
                rel={isEmail ? '' : 'noopener noreferrer'}
              >
                <img
                  src={getIcon(contact.platform.toLowerCase())}
                  alt={`${contact.platform} Icon`}
                />
                <div className={styles.contact__name}>
                  {contact.displayName || contact.url}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}