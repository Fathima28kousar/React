

const ContactList = (props) => {
  let selectedContact = (contact) => {
    console.log(contact.name.first)
    props.getContact(contact)
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(props.contact)}</pre> */}
      <table className='table'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              props.contacts.map((contact,index)=>{
                return <tr key={index} onClick={selectedContact.bind(null,contact)}>
                    <td>{index}</td>
                    <td>{contact.login.uuid.substr(32)}</td>
                    <td>{contact.name.first}</td>
                    <td>{contact.email}</td>
                </tr>
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default ContactList
