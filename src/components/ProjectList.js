import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const elements = projects.map(x => {
    return ( <ProjectItem  key={x.id} name = {x.name} about={x.about} technologies = {x.technologies} />  )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{elements}</div>
    </div>
  );
}

export default ProjectList;
