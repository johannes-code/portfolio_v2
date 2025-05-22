import { client } from "./sanity";

// all projects
export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      name,
      description,
      "coverPhoto": coverPhoto.asset->url,
      "technologies": technologies[]->name,
      
    }
  `);
}

// single project by ID
export async function getProjectById(id) {
  return client.fetch(
    `
    *[_type == "project" && _id == $id][0] {
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
    { id }
  );
}
