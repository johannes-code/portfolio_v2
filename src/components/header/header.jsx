import { useState, useEffect } from "react";
import { getHeaderData } from "../../lib/api";
import { Link } from "react-router-dom";
import { MediaHeader } from "./MediaHeader/MediaHeader";
import styles from "./header.module.css";

export const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      setLoading(true);
      const data = await getHeaderData();
      setHeaderData(data);
    } catch (error) {
      console.error("Error fetching header data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          {headerData?.logo && <img src={headerData.logo} alt="Logo" />}
          <nav>
            {loading ? (
              <p>Loading navigation...</p>
            ) : (
              <ul className={styles.navItems}>
                {headerData?.navigationLinks?.length > 0 &&
                  headerData.navigationLinks.map((link, index) => (
                    <li key={index}>
                      {link.isExternal ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : link.url.startsWith("#") ? (
                        <a href={"/" + link.url}>{link.label}</a>
                      ) : (
                        <Link to={link.url}>{link.label}</Link>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </nav>
        </div>
      </header>
      <MediaHeader />
    </>
  );
};
