import { useState, useEffect } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      let response = await fetch(
        "https://laravel.louiseabrena.ca/api/projects"
      );
      let data = await response.json();
      //   console.log(data);
      setProjects(data);
    };
    getProject();
  }, []);

  return (
    <div id="fullProject">
      <h1 id="projHeader">Projects</h1>
      <div id="projects">
        {projects.map((project) => (
          <div key={project.id} className="oneProject">
            <img src={project.image} alt="project screenshot"></img>
            <a id="title" href={project.url}>
              <h4>{project.title}</h4>
            </a>
            <p>{project.content}</p>
            <p>{project.skill.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
