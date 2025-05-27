import { useEffect, useState } from "react";
import { getSocialLinks } from "../../../lib/api";
import { getIcon } from "../../../utils/iconMap";

export const MediaHeader = () => {
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      const socials = await getSocialLinks();
      setSocialLinks(socials);
    } catch (error) {
      console.error("Error fetching social links:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  const headerSocials =
    socialLinks?.links?.filter((link) => link.showIn?.includes("header")) || [];

  return (
    <>
      <div className="media_header fixed left-8 top-0 flex flex-col justify-center items-center">
        <div className="media_line h-50 w-[1px] bg-gray-500 mb-4" />

        <div className="flex flex-col space-y-4">
          {headerSocials.map((social, index) => {
            if (!social || !social.platform || !social.url) {
              console.warn("Invalid social object:", social);
              return null;
            }

            const isEmail = social.platform.toLowerCase() === "email";
            const href = isEmail ? `mailto:${social.url}` : social.url;

            return (
              <a
                key={index}
                className="before:content-none! hover:scale-150 media_icon .h-3rem .e-3rem"
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
    </>
  );
};
