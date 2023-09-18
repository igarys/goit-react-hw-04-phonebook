import { ContactForm } from '.'
import { SearchFilter } from '.'
import { ContactList } from '.'
import { nanoid } from "nanoid";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contact")) || [];
  });

  const [filter, setFilter] = useState("");

  const setLocalStorage = () => {
    console.log("comp did update");
    const savedContacts = JSON.stringify(contacts);
    localStorage.setItem("contact", savedContacts);
  };

  useEffect(() => {
    setLocalStorage();
  }, [contacts]);

  const addContact = ({ name, number }) => {
    contacts.some((arr) => arr.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in your phonebook.`)
      : setContacts((prevState) => [
          { id: nanoid(), name, number },
          ...prevState,
        ]);
  };

  const searchInput = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    console.log(`filter state: ${filter}`);
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toString().toLowerCase())
    );
  };

  const deleteContacts = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div style={{ marginLeft: "80px", marginTop: "50px" }}>
      <h2>Phonebook</h2>
      <ContactForm addedContact={addContact} />
      <h2>Contacts</h2>
      <SearchFilter searchInput={searchInput} />
      <ContactList
        contacts={filterContacts()}
        deleteContacts={deleteContacts}
      />
    </div>
  );
};
