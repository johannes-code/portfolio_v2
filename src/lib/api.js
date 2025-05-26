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
      
    }
  `);
}

// single project by ID
export async function getProjectByName(name) {
  return client.fetch(
    `
    *[_type == "project" && name == $name][0] {
      _id,
      name,
      "slug": slug.current,
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
      quote,
      author
    }`);
}

export async function getAllSkills() {
  return client.fetch(`
    *[_type == "skill"] {
      _id,
      name,
      "category": category->name,
      "categoryId": category->_id,
      "logo": logo.asset->url,
  } | order(category->order asc)     
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
      description,
      email,
      }
  `);
}

export async function getSocialLinks() {
  return client.fetch(`
    *[_type == "socialLinks"][0] {
        links[] {
        platform,
        url,
        "icon": icon.asset->url
        }
      }
    `);
} 
