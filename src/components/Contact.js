import { useState, useEffect } from "react";
export default function Contact() {
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
    <div>
      <h1 id="contHeader">Contacts</h1>
      <p>Mary Louise Anhance Abrena</p>
      <p>Backend Developer</p>
      <p>abrenalouise@gmail.com</p>
      <p>📍 Toronto, Ontario</p>
      <div id="socials">
        {contacts.map((contact) => (
          <div key={contact.id}>
            <a href={contact.url}>
              <h4>{contact.title}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
