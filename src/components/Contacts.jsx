import { useState } from "react";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";
import Persons from "./Persons";
function Contacts() {
  const [Alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value, id: v4() }));
  };
  const clickHandler = () => {
    if (
      !contact.email ||
      !contact.lastName ||
      !contact.name ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    // const newContact={...contact,id: v4()};
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((i) => {
      return i.id !== id;
    });
    setContacts(newContacts);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Name"
          onChange={changeHandler}
          name="name"
          value={contact.name}
        />
        <input
          type="text"
          placeholder="LastName"
          onChange={changeHandler}
          name="lastName"
          value={contact.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          name="email"
          value={contact.email}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={changeHandler}
          name="phone"
          value={contact.phone}
        />
        <button className={styles.buttonContact} onClick={clickHandler}>
          Add Contact
        </button>
      </div>
      <div className={styles.parentAlert}>{Alert && <p>{Alert}</p>}</div>

      <Persons contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default Contacts;
