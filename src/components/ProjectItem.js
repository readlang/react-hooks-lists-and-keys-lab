import React from "react";

function ProjectItem({ name, about, technologies }) {
  const element = technologies.map(x => {
    return( <span key={x}>{x}</span> )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {element}
      </div>
    </div>
  );
}

export default ProjectItem;
