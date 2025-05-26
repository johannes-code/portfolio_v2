// src/utils/iconMap.js
import discordIcon from '../icons/discord.svg';
import emailIcon from '../icons/email.svg';
import githubIcon from '../icons/github.svg';
import linkedinIcon from '../icons/linkedin.svg';
import twitterIcon from '../icons/twitter.svg';

console.log("icons imported:", {
    discord: discordIcon,
    github: githubIcon,
    email: emailIcon
});

export const iconMap = {
  discord: discordIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  twitter: twitterIcon,
  email: emailIcon,
};

export const getIcon = (platform) => {
    const icon = iconMap[platform] || iconMap.website;
    console.log(`getting icon for ${platform}:`, icon)
  return iconMap[platform] || iconMap.website; // fallback to website icon
};