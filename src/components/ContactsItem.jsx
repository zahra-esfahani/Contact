import styles from "./ContactsItem.module.css"
function ContactsItem({data:{email,name,lastName,id} , deleteHandler}) {
   
  return (
    <>
    <div className={styles.container}>
    <div key={id}>
      {name} {lastName}
    </div>
    <div key={id}>
      <span>Ⓜ️</span> {email}
    </div>
    <div key={id}>
      <span>📞</span> {name}
    </div>
    <div><button onClick={()=>deleteHandler(id)}>🪣</button></div>
    </div>
  </>
  )
}

export default ContactsItem;