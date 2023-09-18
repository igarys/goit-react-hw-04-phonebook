import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContactForm = ({ addedContact }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleInput = value => {
    return evt => {
      setContact({ ...contact, [value]: evt.target.value });
    };
  };

  const handleAddButton = e => {
    e.preventDefault();
    setContact({ name: '', number: '' });
    addedContact(contact);
  };

  return (
    <form className={css.form} onSubmit={handleAddButton}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={contact.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          onChange={handleInput('name')}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInput('number')}
        />
      </label>
      <button style={{ marginTop: '15px' }} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addedContact: PropTypes.func,
};
