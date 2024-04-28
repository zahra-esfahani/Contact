import ContactsItem from "./ContactsItem";
import styles from "./Persons.module.css"
function Persons({ contacts , deleteHandler }) {

  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <div className={styles.container}>
          {contacts.map((contact) => (
            <ContactsItem key={contact.id} data={contact} deleteHandler={deleteHandler}/>
          ))}
        </div>
      ) : (
        <p className={styles.containerP}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default Persons;
