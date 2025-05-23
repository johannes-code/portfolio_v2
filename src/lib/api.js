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
