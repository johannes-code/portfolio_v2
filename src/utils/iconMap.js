// src/utils/iconMap.js
import discordIcon from "../icons/discord.svg";
import emailIcon from "../icons/email.svg";
import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";
import twitterIcon from "../icons/twitter.svg";

export const iconMap = {
  discord: discordIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  twitter: twitterIcon,
  email: emailIcon,
};

export const getIcon = (platform) => {
  return iconMap[platform] || iconMap.website; // fallback to website icon
};
