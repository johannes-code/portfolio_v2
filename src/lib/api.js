import { client } from "./sanity";

// all projects
export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      "coverPhoto": coverPhoto.asset->url,
      "technologies": technologies[]->name,
      order
    }
  `);
}

export async function getProjectByName(name) {
  return client.fetch(
    `
    *[_type == "project" && name == $name][0] {
      _id,
      name,
      description,
      link,
      github,
      "coverPhoto": coverPhoto.asset->url,
      "screenshots": screenshots[].asset->url,
      long_desc,
      learned,
      missed,
      why,
      "technologies": technologies[]->name,
      tags
    }
  `,
    { name }
  );
}

export async function getAllQuotes() {
  return client.fetch(`
    *[_type == "quote"] {
      _id,
      "text": quote,
      author
    }
  `);
}

export async function getSkillsGrouped() {
  return client.fetch(`
    *[_type == "skillCategory"] | order(order asc) {
      _id,
      name,
      "skills": *[_type == "skill" && references(^._id)] {
        name,
        "logo": logo.asset->url
      },
    }
  `);
}

export async function getHeroData() {
  return client.fetch(`
    *[_type == "hero"][0] {
      _id,
      title,
      description,
      buttonText,
      status,
      "mainImage": mainImage.asset->url,
      "secondaryImages": secondaryImages[].asset->url,
      "logo": logo.asset->url
    }
  `);
}

export async function getContactData() {
  return client.fetch(`
    *[_type == "contact"][0] {
      _id,
      title,
      description
    }
  `);
}

export async function getSocialLinks() {
  return client.fetch(`
    *[_type == "socialLinks"][0] {
      links[] {
        platform,
        url,
        displayName,
        showIn,
        "icon": icon.asset->url
      }
    }
  `);
}

export async function getAboutData() {
  return client.fetch(`
    *[_type == "about"][0] {
      _id,
      title,
      description,
      buttonText
    }
  `);
}

export async function getAboutPageData() {
  return client.fetch(`
    *[_type == "aboutPage"][0] {
      _id,
      name,
      sections[] {
        title,
        content
      }
    }
  `);
}

export async function getHeaderData() {
  return client.fetch(`
    *[_type == "header"][0] { 
      _id,
      "logo": logo.asset->url,
      navigationLinks[] {
        label,
        url,
        isExternal
      }
    }
  `);
}

export async function getProjectsPageData() {
  return client.fetch(`
    *[_type == "projectsPage"][0] {
      _id,
      title,
      description,
      buttonText
    }
  `);
}

export async function getFooterData() {
  return client.fetch(`
    *[_type == "footer"][0] {
      _id,
      description,
      copyright,
      email
    }
  `);
}

export async function getRandomQuote() {
  const quotes = await getAllQuotes();
  return quotes; // Return all quotes, let the component pick random one
}
