import { useState, useEffect } from "react";

export default function About() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      let response = await fetch(
        "https://laravel.louiseabrena.ca/api/contacts"
      );
      let data = await response.json();
      //   console.log(data);
      setContacts(data);
    };
    getContact();
  }, []);

  return (
    <main id="main">
      <h1 id="welcome">Kamusta? Welcome to my portfolio!</h1>
      <div id="intro">
        <p id="name">Hi! I am Mary Louise Abrena!</p>
        <div id="socials">
          {contacts.map((contact) => (
            <div key={contact.id}>
              <a href={contact.url}>
                <h4>{contact.title}</h4>
              </a>
            </div>
          ))}
        </div>
        <p id="blurb">
          I am Backend Developer. I am continuously learning code at Humber
          College and Codecademy. Most of my experience are based on my projects
          and assignments as well as works I've done with grassroot
          organizations and lastly my passion projects. I have found my passion in
          building websites from frontend to backend by creating websites using
          templates from Squarespace, Wix and WordPress for small businesses and
          grassroots organisations she was part of.
        </p>
      </div>
    </main>
  );
}
