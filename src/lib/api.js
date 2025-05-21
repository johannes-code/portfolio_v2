import { client } from "./sanity";

// all projects
export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      name,
      description,
      link,
      github,
      "screenshot": screenshot.asset->url,
      long_desc,
      learned,
      missed,
      why,
      "technologies": technologies[]->name,
      order
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
      "screenshot": screenshot.asset->url,
      long_desc,
      learned,
      missed,
      why,
      "technologies": technologies[]->name,
      order
    }
  `,
    { id }
  );
}
