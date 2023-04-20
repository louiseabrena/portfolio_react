import { useState, useEffect } from "react";

export default function Education() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const getEducation = async () => {
      let response = await fetch(
        "https://laravel.louiseabrena.ca/api/education"
      );
      let data = await response.json();
      //   console.log(data);
      setEducations(data);
    };
    getEducation();
  }, []);

  return (
    <div>
      <h1 id="educHeader">Educations</h1>
      <div id="educations">
        {educations.map((education) => (
          <div key={education.id}>
            <h4>{education.institution}</h4>
            <p>{education.description}</p>
            <p>{education.certification}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
