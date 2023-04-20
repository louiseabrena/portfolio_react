import { useState, useEffect } from "react";

export default function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkill = async () => {
      let response = await fetch("https://laravel.louiseabrena.ca/api/skills");
      let data = await response.json();
      //   console.log(data);
      setSkills(data);
    };
    getSkill();
  }, []);

  return (
    <div>
      <h1 id="skillsHeader">Skills</h1>
      <div id="skills">
        {skills.map((skill) => (
          <div key={skill.id}>
            <p>{skill.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
